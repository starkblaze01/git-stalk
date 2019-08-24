import * as React from "react";
import octocat from './octocat.gif';

class Octocatgif extends React.PureComponent<any, any> {
    render() {
        return (
            <>
                <img
                    src={octocat}
                    alt="OctoCat"
                    style={{
                        maxWidth: '300px'
                    }}
                />
            </>
        );
    }
}

export default Octocatgif;