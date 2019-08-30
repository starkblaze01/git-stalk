import * as React from "react";
import injectSheet from "react-jss";
import { Typography, Input } from "antd";
import { getUserDetails, setUserName } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Octocatgif from '../assets/Octocatgif';

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
    paddingTop: "10%",
//     position: 'fixed',
    background: 'linear-gradient(45deg, black, transparent)',
  },
});
const { Title } = Typography;

class Home extends React.PureComponent<any, any> {

  async componentDidMount() {
    // await this.props.getJeneretaRepoDetails();
  }

  async stalkUser(user: any) {
    // console.log(user);
    // console.log(this.props);
    await this.props.setUserName(user);
    this.props.history.push(`/stalk/${user}`)
  }

  state: any = {
    mode: false
  };
  render() {
    const { classes } = this.props;
    const { Search } = Input;
    return (
      <>
        <div className={classes.align}>
          <Title>Check What's your peers are up to!</Title>
          <Octocatgif />
          <div>
            <Search
              placeholder="Enter User Name"
              enterButton="Stalk"
              size="large"
              onSearch={user => this.stalkUser(user)}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gitrepoReducer }: { gitrepoReducer: any }) => ({
  userDetails: gitrepoReducer.userDetails,
  loadingUser: gitrepoReducer.loadingUser,
  userNotFound: gitrepoReducer.userNotFound,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
  getUserDetails,
  setUserName,
}, dispatch))

const HomeStyled = injectSheet(styles)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(HomeStyled);
