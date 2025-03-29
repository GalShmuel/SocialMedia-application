import React from 'react'
import Profile from '../../img/coverPic.jpg'
import Cover from '../../img/cover.jpg'
import './ProfileCard.css'
function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>Zendaya MJ</span>
                <span>Photographer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>7,000</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl">
                        <div className="follow">
                            <span>1</span>
                            <span>Followers</span>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProfileCard