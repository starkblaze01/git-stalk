import * as React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import {
    setUserName, getUserDetails, getEvents, getFollowers,
    getFollowing, getOrganization
} from '../actions/gitrepoAction';
import { bindActionCreators } from 'redux';
import { Card, Skeleton, Icon, Tooltip } from 'antd';

const styles = (theme: any) => ({
    align: {
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        // justifyContent: 'space-between',
        // alignItems: "center",
        alignContent: "center",
        // verticleAlign: "middle !important",
        margin: '100px',
        height: "100vh",
        // width: '100%',
        // paddingTop: "10px"
    },
});

const { Meta } = Card;
const tablist: any = [
    {
        key: 'events',
        tab: 'Events'
    },
    {
        key: 'organizations',
        tab: 'Organizations',
    },
    {
        key: 'followers',
        tab: 'Followers'
    },
    {
        key: 'following',
        tab: 'Following',
    },
]

class Stalk extends React.PureComponent<any, any> {
    state: any = {
        key: 'events',
    }
    async componentDidMount() {
        const user = this.props.match.params.userId
        console.log(user);
        if (user && user.length) {
            await this.props.setUserName(user)
            await this.props.getUserDetails(user)
            await this.props.getEvents(user)
            await this.props.getFollowers(user)
            await this.props.getFollowing(user)
            await this.props.getOrganization(user)
        }
    }
    onTabChange = (key: any, type: any) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    render() {
        const follower = this.props.follower ?
            this.props.follower.map((el: any) => {
                return (
                    <a href={el.html_url} key={el.id}><Tooltip
                        title="Click to checkout on GitHub"
                    ><Card.Grid
                        style={{
                            width: '30%', overflow: 'hidden',
                            marginLeft: '2%', marginBottom: '2%'
                        }}
                    >
                            <Card.Meta
                                avatar={<img
                                    style={{ maxWidth: '100%' }}
                                    src={el.avatar_url} alt={el.login}
                                />}
                            >
                            </Card.Meta>
                            {el.login}
                        </Card.Grid></Tooltip>
                    </a>
                );
            }) : null
        const following = this.props.following ?
            this.props.following.map((el: any) => {
                return (
                    <a href={el.html_url} key={el.id}><Tooltip
                        title="Click to checkout on GitHub"
                    ><Card.Grid
                        style={{
                            width: '30%', overflow: 'hidden',
                            marginLeft: '2%', marginBottom: '2%'
                        }}
                    >
                            <Card.Meta
                                avatar={<img
                                    style={{ width: '100%' }}
                                    src={el.avatar_url} alt={el.login}
                                />}
                            >
                            </Card.Meta>
                            {el.login}
                        </Card.Grid></Tooltip>
                    </a>
                );
            }) : null
        const organization = this.props.organization ?
            this.props.organization.map((el: any) => {
                return (
                    <a href={`https://github.com/${el.login}`} key={el.id}><Tooltip
                        title="Click to checkout on GitHub"
                    ><Card.Grid
                        style={{
                            width: '30%', overflow: 'hidden',
                            marginLeft: '2%', marginBottom: '2%'
                        }}
                    >
                            <Card.Meta
                                avatar={<img
                                    style={{ width: '100%' }}
                                    src={el.avatar_url} alt={el.login}
                                />}
                            >
                            </Card.Meta>
                            {el.login}
                        </Card.Grid></Tooltip>
                    </a>
                );
            }) : null
        const events = this.props.events ?
            this.props.events.map((el: any) => {
                return ((el.type === 'PullRequestEvent' || 'WatchEvent' || 'IssuesEvent' || 'IssueCommentEvent'
                    || 'PushEvent' || 'CreateEvent' || 'PullRequestReviewCommentEvent') ?
                    <a href={`https://github.com/${el.login}`} key={el.id}><Card.Grid
                        style={{
                            overflow: 'hidden',
                            marginLeft: '2%', marginBottom: '2%'
                        }}
                    >
                        {el.type}
                    </Card.Grid>
                    </a>
                    : null);
            }) : null
        const tabListData: any = {
            events: <div>{events}</div>,
            organizations: <>{organization}</>,
            followers: <>{follower}</>,
            following: <>{following}</>,
        }
        console.log(this.props.events)
        const { classes, userDetails: { data } } = this.props;
        return (
            <>
                <div className={classes.align}>
                    {data ? <Tooltip placement="right" title="Checkout on GitHub"><Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img src={
                            data.avatar_url} alt="avatar" />}
                        loading={this.props.loadingUsers}
                        onClick={() => window.location.href = `${data.html_url}`}
                    >
                        <Meta title={`${data.name}`} />
                        <div>{this.props.userName}</div>
                        <hr />
                        <div>Followers:{data.followers}</div>
                        <div>Following:{data.following}</div>
                        <div>Public Repos:{data.public_repos}</div>
                        <div>Bio:{data.bio}</div>
                    </Card></Tooltip> : ''}
                    <Card
                        style={{
                            overflowY: 'auto',
                            width: 900
                        }}
                        tabList={tablist}
                        activeTabKey={this.state.noTitleKey}
                        onTabChange={key => {
                            this.onTabChange(key, 'key');
                        }}
                    >{tabListData[this.state.key]}
                    </Card>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ gitrepoReducer }: { gitrepoReducer: any }) => ({
    userDetails: gitrepoReducer.userDetails,
    loadingUser: gitrepoReducer.loadingUser,
    userName: gitrepoReducer.userName,
    loadingFollowers: gitrepoReducer.loadingFollowers,
    loadingFollowing: gitrepoReducer.loadingFollowing,
    loadingEvents: gitrepoReducer.loadingEvents,
    loadingOrg: gitrepoReducer.loadingOrg,
    follower: gitrepoReducer.follower.data,
    following: gitrepoReducer.following.data,
    organization: gitrepoReducer.organization.data,
    events: gitrepoReducer.events.data,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
    getUserDetails,
    setUserName,
    getEvents,
    getFollowers,
    getFollowing,
    getOrganization,
}, dispatch))

const StalkStyled = injectSheet(styles)(Stalk);
export default connect(mapStateToProps, mapDispatchToProps)(StalkStyled);