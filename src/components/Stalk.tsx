import * as React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { setUserName } from '../actions/gitrepoAction';
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
        paddingTop: "10%"
    },
});

const { Meta } = Card;
class Stalk extends React.PureComponent<any, any> {
    state: any = {

    }
    async componentDidMount() {
        const user = this.props.match.params.userId
        console.log(user);
        await user && user.length ? this.props.setUserName(user) : console.log(user);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.align}>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        // cover={}
                        loading={this.props.loadingUsers}
                    >
                        {this.props.userName}

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
    setUserName,
}, dispatch))

const StalkStyled = injectSheet(styles)(Stalk);
export default connect(mapStateToProps, mapDispatchToProps)(StalkStyled);