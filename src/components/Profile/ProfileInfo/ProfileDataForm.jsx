import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import style from './../../common/FormsControls/Formcontrols.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills:</b>
                {createField('My professioanl skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b>:
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
                </div>
            })}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;