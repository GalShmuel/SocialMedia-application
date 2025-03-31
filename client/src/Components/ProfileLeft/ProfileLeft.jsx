// Importing necessary components
import React from 'react'; // React for functional component
import LogoSearch from '../LogoSearch/LogoSearch'; // LogoSearch component for search functionality
import FollowersCard from '../FollowersCard/FollowersCard'; // FollowersCard component to display followers info
import InfoCard from '../InfoCard/InfoCard'; // InfoCard component for displaying user info

// Defining the ProfileLeft component
const ProfileLeft = () => {
    return (
        <div className="ProfileSlide">
            {/* LogoSearch allows users to search */}
            <LogoSearch />
            {/* InfoCard displays user's personal information */}
            <InfoCard />
            {/* FollowersCard displays a list of people following the user */}
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft; // Exporting ProfileLeft component for use in other parts of the app
