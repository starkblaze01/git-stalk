import * as React from "react";
import injectSheet from "react-jss";
import { Typography, Switch, Icon, Input } from "antd";
import { getSentimentRepoDetails } from '../actions/gitrepoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Octocatgif from '../assets/Octocatgif';
import FooterB from './FooterB';

const styles = (theme: any) => ({
  align: {
    zIndex: 3,
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
  switch: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    position: "fixed",
    alignItems: "center",
    alignContent: "center",
    marginTop: "10px",
    zIndex: 2,
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    margin: 'auto',
    color: '#0057e3',
  },
  card: {
    height: '300px',
    width: '250px',
    border: '1px solid #8f8f8f',
    boxShadow: '5px 5px 5px 5px',
    borderRadius: '10px 10px',
  }
});
const { Title } = Typography;

class Home extends React.PureComponent<any, any> {

  async componentDidMount() {
    // await this.props.getJeneretaRepoDetails();
  }

  state: any = {
    mode: false
  };
  render() {
    const { classes } = this.props;
    const { Search } = Input;
    return (
      <>
        <div className={classes.switch}>
          <Switch
            checkedChildren={<Icon type="smile" />}
            unCheckedChildren={<Icon type="smile" theme="filled" />}
            onChange={() => {
              this.setState({ mode: !this.state.mode });
            }}
          />
        </div>
        <div className={classes.align}>
          <Title>Check What's your peers are up to!</Title>
          <Octocatgif />
          <div>
            <Search
              placeholder="Enter User Name"
              enterButton="Stalk"
              size="large"
              onSearch={() => console.log(process.env)}
            />
          </div>
        </div>
        <FooterB />
      </>
    );
  }
}

const mapStateToProps = ({ gitrepoReducer }: { gitrepoReducer: any }) => ({
  userDetails: gitrepoReducer.userDetails.data,
  loadingUsers: gitrepoReducer.loadingUsers,
});

const mapDispatchToProps = (dispatch: any) => (bindActionCreators({
  getSentimentRepoDetails,
}, dispatch))

const HomeStyled = injectSheet(styles)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(HomeStyled);
