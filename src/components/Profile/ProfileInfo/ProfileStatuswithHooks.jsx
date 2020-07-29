import React, {useEffect, useState} from 'react';


const ProfileStatuswithHooks = (props) => {

    useEffect(() => {
         setStatus(props.status )
    }, [props.status])

    const [isEditMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!isEditMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>}
            {isEditMode &&
            <div>
                <input autoFocus={true}
                       value={status}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}/>
            </div>}
        </div>
    );
}

export default ProfileStatuswithHooks;