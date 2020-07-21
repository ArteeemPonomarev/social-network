import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings = (props) => {
    return(
        <div>
            Settings
        </div>
    );
}

export default withAuthRedirect(Settings);