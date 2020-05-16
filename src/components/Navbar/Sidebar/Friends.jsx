import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css';


const Friends = (props) => {
    let friends = props.friends.map(fr => <Friend info={fr.name} src={fr.src}/>);

    return (
        <div className={s.Friends}>
            <div className={s.position}>
                Friends
            </div>
            {friends}
        </div>
    );
}

export default Friends;