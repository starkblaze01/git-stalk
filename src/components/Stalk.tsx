import * as React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { setUserName, getUserDetails } from '../actions/gitrepoAction';
import { bindActionCreators } from 'redux';
import { Card, Skeleton, Icon } from 'antd';
import { fetchEvents, fetchfollowers, fetchfollowing, fetchOrgList } from '../api/fetchdata';

const styles = (theme: any) => ({
    align: {
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        // alignItems: "center",
        alignContent: "center",
        // verticleAlign: "middle !important",
        margin: '100px',
        height: "100vh",
        // width: '100%',
        paddingTop: "10px"
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

const tabListData: any = {
    events: <div>ss</div>,
    organizations: <div>aa</div>,
    followers: <div>dd</div>,
    following: <div>cc</div>,
}

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
            await fetchfollowers(user)
        }
    }
    onTabChange = (key: any, type: any) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    render() {
        const { classes, userDetails: { data } } = this.props;
        console.log(data)
        return (
            <>
                <div className={classes.align}>
                    {data ? <Card
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
                    </Card> : ''}
                    <Card
                        style={{ width: '100%' }}
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
    loadingUsers: gitrepoReducer.loadingUsers,
    userName: gitrepoReducer.userName,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
    getUserDetails,
    setUserName,
}, dispatch))

const StalkStyled = injectSheet(styles)(Stalk);
export default connect(mapStateToProps, mapDispatchToProps)(StalkStyled);