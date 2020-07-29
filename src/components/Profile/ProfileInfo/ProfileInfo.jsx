import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='back-img'></img>*/}
            
            {/*</div>*/}
            <div className =  {s.Info} >
               <img src = {props.profile.photos.small} />
                ava + discription(about myself)
                <ProfileStatuswithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>

    );
}
export default ProfileInfo;