import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News = (props) => {
    return(
        <div>
            News
        </div>

    );
}

export default withAuthRedirect(News);