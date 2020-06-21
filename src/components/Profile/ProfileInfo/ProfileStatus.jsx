import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


class ProfileStatus extends React.Component {

    state = {
        isEditMode: false
    }

    activateEditMode = () => {
        this.setState({isEditMode: true})
    }
    deactivateEditMode = () => {
        this.setState({isEditMode: false})
    }

    render() {
        return (
            <div>
                {!this.state.isEditMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>}
                {this.state.isEditMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>}
            </div>
        );
    }
}
export default ProfileStatus;