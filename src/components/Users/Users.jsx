import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://img.icons8.com/bubbles/2x/user.png',
            followed: false,
            fullName: 'Artem',
            status: 'I am a boss',
            location: {city: 'Saint-Petersburg', country: 'Russia'}
        },
            {
                id: 2,
                photoUrl: 'https://img.icons8.com/bubbles/2x/user.png',
                followed: false,
                fullName: 'Dima',
                status: 'I am a programmer',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://img.icons8.com/bubbles/2x/user.png',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a student',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://img.icons8.com/bubbles/2x/user.png',
                followed: true,
                fullName: 'Ivan',
                status: 'I am a boss too',
                location: {city: 'Minsk', country: 'Belarus'}
            },])
    }



    return (<div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.photo} alt="#"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.fullName} </div>
                            <div> {u.status} </div>
                        </span>

                        <span>
                            <div> {u.location.city} </div>
                            <div> {u.location.country} </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;