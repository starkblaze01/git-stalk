import * as React from 'react';
import injectSheet from 'react-jss';


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
class Stalk extends React.PureComponent<any, any> {
    state: any = {

    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.align}>Test</div>
            </>
        );
    }
}

const StalkStyled = injectSheet(styles)(Stalk);
export default StalkStyled;