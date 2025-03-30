import React from 'react'
import './Profile.css'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostSide from '../../Components/PostSide/PostSide'

const Profile = () => {
    return (
        <div className="Profile">
            <ProfileLeft/>

            <div className="ProfileCenter">
                <ProfileCard/>
                <PostSide/>
            </div>
        </div>
    )
}

export default Profile