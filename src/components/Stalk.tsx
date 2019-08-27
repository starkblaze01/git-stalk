import * as React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { setUserName, getUserDetails } from '../actions/gitrepoAction';
import { bindActionCreators } from 'redux';
import { Card, Skeleton, Icon } from 'antd';

const styles = (theme: any) => ({
    align: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        verticleAlign: "middle !important",
        margin: 'auto',
        height: "100vh",
        width: '100%',
        paddingTop: "5%"
    },
});

const { Meta } = Card;
class Stalk extends React.PureComponent<any, any> {
    state: any = {

    }
    async componentDidMount() {
        const user = this.props.match.params.userId
        console.log(user);
        if (user && user.length) {
            await this.props.setUserName(user)
            await this.props.getUserDetails(user)

        }
    }

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
                        <div>bio:{data.bio}</div>
                        <div>Followers:{data.followers}</div>
                        <div>Following:{data.following}</div>
                        <div>Public Repos:{data.public_repos}</div>
                    </Card> : ''}
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