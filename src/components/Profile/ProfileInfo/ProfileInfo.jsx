import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";
import userPhoto from './../../../assets/images/user_icon.png'
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    const [isEditMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div className={s.Info}>
                <img src={profile.photos.large || userPhoto}
                     className={s.mainPhoto}
                     alt='userPhoto'/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {isEditMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => setEditMode(true)}/>
                }
                <ProfileStatuswithHooks status={status}
                                        updateUserStatus={updateUserStatus}/>
            </div>
        </div>

    );
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={activateEditMode}>Edit</button>}
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return (<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )
            })}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}
export default ProfileInfo;