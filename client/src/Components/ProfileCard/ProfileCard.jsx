// Importing React and necessary assets
import React from 'react'; // React for functional component
import Profile from '../../img/coverPic.jpg'; // Profile image for the user
import Cover from '../../img/cover.jpg'; // Cover image for the user profile
import './ProfileCard.css'; // Importing the CSS file for styling

// Defining the ProfileCard component
function ProfileCard() {
    // A flag to determine if it's the user's own profile page
    const ProfilePage = true;

    return (
        <div className="ProfileCard">
            {/* Profile and cover images */}
            <div className="ProfileImages">
                <img src={Cover} alt="Cover" /> {/* Cover image */}
                <img src={Profile} alt="Profile" /> {/* Profile image */}
            </div>

            {/* Profile name and role */}
            <div className="ProfileName">
                <span>Zendaya MJ</span> {/* Displaying user name */}
                <span>Photographer</span> {/* Displaying user's profession */}
            </div>

            {/* Follow and status information */}
            <div className="followStatus">
                <hr /> {/* Horizontal line separator */}
                <div>
                    <div className="follow">
                        <span>7,000</span> {/* Number of followings */}
                        <span>Followings</span>
                    </div>
                    <div className="vl"> {/* Vertical separator */}
                    </div>
                    <div className="follow">
                        <span>1</span> {/* Number of followers */}
                        <span>Followers</span>
                    </div>
                    {/* Conditionally render post information if it's the user's profile */}
                    {ProfilePage && (
                        <>
                            <div className="vl"> {/* Vertical separator */}
                            </div>
                            <div className="follow">
                                <span>3</span> {/* Number of posts */}
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr /> {/* Horizontal line separator */}
            </div>

            {/* Show "My Profile" message if it's not the user's profile page */}
            {ProfilePage ? "" : <span>My Profile</span>}
        </div>
    )
}

export default ProfileCard; // Exporting ProfileCard component for use in other parts of the app
