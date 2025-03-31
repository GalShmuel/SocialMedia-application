// Importing necessary modules and components
import React from 'react'; // React library
import { VscEditSession } from "react-icons/vsc"; // Importing the edit session icon
import { FiSearch } from "react-icons/fi"; // Importing the search icon
import './LogoSearch.css'; // Importing the CSS file for styling

// Defining the LogoSearch component
const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            {/* Displaying the session edit icon */}
            <VscEditSession size={33} />

            <div className="Search">
                {/* Input field for the user to type in the search query */}
                <input type="text" placeholder='#Explore' />

                <div className="s-icon">
                    {/* Displaying the search icon */}
                    <FiSearch />
                </div>
            </div>
        </div>
    )
}

// Exporting the LogoSearch component for use in other parts of the app
export default LogoSearch;
