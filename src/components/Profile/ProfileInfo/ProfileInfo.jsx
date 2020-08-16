import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";
import userPhoto from './../../../assets/images/user_icon.png'


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.Info} >
               <img src={profile.photos.large || userPhoto}
                    className={s.mainPhoto}
                    alt='userPhoto'/>
                { isOwner ? <input type={'file'} onChange={onMainPhotoSelected}/> : false}
                <ProfileStatuswithHooks status={status}
                                        updateUserStatus={updateUserStatus}/>
            </div>
        </div>

    );
}
export default ProfileInfo;