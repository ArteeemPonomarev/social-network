import React from 'react';
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";


const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().sidebar.friends;
                return (
                    <Friends info={state}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
}

export default FriendsContainer;