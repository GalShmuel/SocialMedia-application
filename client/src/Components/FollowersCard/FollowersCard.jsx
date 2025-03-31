// Importing necessary modules
import React from 'react'; // React library
import './FollowerCard.css'; // Importing the CSS file for styling
import { Followers } from '../../Data/FollowersData'; // Importing data about followers

// Defining the FollowersCard component
function FollowersCard() {
    return (
        <div className="FollowersCard">
            {/* Displaying the title of the card */}
            <h3>who is following you</h3>

            {/* Iterating through the list of followers to display each follower's info */}
            {Followers.map((follower, id) => {
                return (
                    <div className="follower" key={id}>
                        {/* Displaying the follower's profile picture */}
                        <img className="followerImg" src={follower.img} alt={follower.username} />
                        <div className="name">
                            {/* Displaying the follower's name and username */}
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                        {/* Follow button */}
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

// Exporting the FollowersCard component for use in other parts of the app
export default FollowersCard;
