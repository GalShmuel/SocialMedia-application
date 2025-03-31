// Importing necessary components
import React from 'react'; // React for functional component
import LogoSearch from '../LogoSearch/LogoSearch'; // LogoSearch component for search functionality
import ProfileCard from '../ProfileCard/ProfileCard'; // ProfileCard component to display user's profile information
import "./ProfileSide.css"; // Importing styles for ProfileSide component
import FollowersCard from '../FollowersCard/FollowersCard'; // FollowersCard component to display the followers list

// Defining the ProfileSide component
const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            {/* LogoSearch allows users to search */}
            <LogoSearch />
            {/* ProfileCard displays the user's profile information */}
            <ProfileCard />
            {/* FollowersCard displays a list of followers of the user */}
            <FollowersCard />
        </div>
    )
}

// Exporting ProfileSide component for use in other parts of the app
export default ProfileSide;
