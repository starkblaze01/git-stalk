import * as React from "react";
import { Layout, Icon } from 'antd';
import injectSheet from 'react-jss';
const { Footer } = Layout;

const styles = (theme: any) => ({
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
    }
})

class FooterB extends React.PureComponent<any, any> {
    render() {
        const { classes } = this.props;
        return (
            <Footer>
                <div className={classes.bottom}>
                    <div>Copyright &copy; {new Date().getFullYear()} starkblaze01</div>
                    <div>
                        Liked It<Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /><Icon type="forward" />&nbsp;
                        Star Me
                        <a href="https://github.com/starkblaze01/git-stalk"><Icon type="star" theme="twoTone" /></a>
                    </div>
                </div>
            </Footer>
        );
    }
}

const FooterBStyled = injectSheet(styles)(FooterB);
export default FooterBStyled;