import React, { Component } from 'react';
import './MyProfile.scss';
import DesktopHeader from '../../components/shared/DesktopHeader/DesktopHeader';

class MyProfile extends Component {
    render(){
        return (
            <div>
                <DesktopHeader/>
                <div id="my-profile" className="container">My Profile</div>
            </div>
        );
    }
}

export default MyProfile;
