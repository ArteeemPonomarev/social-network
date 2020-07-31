import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className =  {s.Info} >
               <img src = {profile.photos.small} />
                ava + discription(about myself)
                <ProfileStatuswithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>

    );
}
export default ProfileInfo;