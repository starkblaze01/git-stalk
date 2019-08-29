import * as React from "react";
import { Layout, Icon, Tooltip } from 'antd';
import injectSheet from 'react-jss';
const { Footer } = Layout;

const styles = (theme: any) => ({
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
    }
})

class Header extends React.PureComponent<any, any> {
    render() {
        const { classes } = this.props;
        return (
            <Footer>
                <div className={classes.bottom}>
                    <a href="https://github.com/starkblaze01"><Tooltip title="Checkout Other Repos on GitHub" placement="bottomRight"><Icon type="github" style={{ fontSize: '25px' }} />
                    </Tooltip>
                    </a>
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

const HeaderStyled = injectSheet(styles)(Header);
export default HeaderStyled;