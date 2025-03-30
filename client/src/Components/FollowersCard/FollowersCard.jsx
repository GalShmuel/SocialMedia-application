import React from 'react'
import './FollowerCard.css'
import { Followers } from '../../Data/FollowersData'
function FollowersCard() {
    return (
        <div className="FollowersCard">
            <h3>who is following you</h3>

            {Followers.map((follower,id)=> {
                return (
                    <div className="follower" key={id}>
                        <img className = "followerImg" src={follower.img} alt={follower.username}/>
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>

                        </div> 
                        <button className='button fc-button'>Follow</button>                      
                    </div>
                )   
            })}
        </div>
    )
}

export default FollowersCard