import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friendItem}>
            <img className = {s.image} src = {props.src} alt='Friend'/>
            <br/>
            <div className = {s.name}>{props.info}</div>
        </div>

    );
}

export default Friend;