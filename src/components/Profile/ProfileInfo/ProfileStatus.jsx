import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        isEditMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({isEditMode: true})
    }
    deactivateEditMode = () => {
        this.setState({isEditMode: false});
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.isEditMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                </div>}
                {this.state.isEditMode &&
                <div>
                    <input  autoFocus={true} onBlur={this.deactivateEditMode}
                            value={this.state.status} onChange={this.onStatusChange}/>
                </div>}
            </div>
        );
    }
}
export default ProfileStatus;