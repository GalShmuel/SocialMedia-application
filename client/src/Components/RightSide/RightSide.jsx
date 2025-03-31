// Importing necessary components and icons
import React, { useState } from 'react'; // React and useState for managing state
import './RightSide.css'; // Importing the CSS for styling
import { HiHome } from "react-icons/hi2"; // Home icon
import { IoMdNotificationsOutline } from "react-icons/io"; // Notifications icon
import { IoSettingsOutline } from "react-icons/io5"; // Settings icon
import { FaRegCommentDots } from "react-icons/fa6"; // Comments icon
import TrendCard from '../TrendCard/TrendCard'; // TrendCard component
import ShareModal from '../ShareModal/ShareModal'; // ShareModal component

// Defining the RightSide component
const RightSide = () => {
    // State for controlling modal visibility
    const [modalOpened, setModalOpened] = useState(false);

    // Function to toggle the modal visibility
    const toggleModal = () => {
        setModalOpened(!modalOpened); // Toggle the modal state
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpened(false); // Set modal state to false to close it
    };

    return (
        <div className="RightSide">
            {/* Navigation icons */}
            <div className="NavIcons">
                <HiHome size={24} /> {/* Home icon */}
                <IoMdNotificationsOutline size={24} /> {/* Notifications icon */}
                <IoSettingsOutline size={24} /> {/* Settings icon */}
                <FaRegCommentDots size={24} /> {/* Comments icon */}
            </div>

            {/* TrendCard component to display trending topics */}
            <TrendCard />

            {/* Share button to open the ShareModal */}
            <button className="button r-button" onClick={toggleModal}>
                Share
            </button>

            {/* Conditionally render the ShareModal if modalOpened is true */}
            {modalOpened && <ShareModal onClose={closeModal} />}
        </div>
    );
};

export default RightSide;
