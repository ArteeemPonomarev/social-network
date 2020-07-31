import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}/>

            {
                users.map(u => <User key={u.id} user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}/>)
            }
        </div>

    )
}

export default Users;