


import React, { useState } from 'react';
import './RightSide.css';
import { HiHome } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);

    const toggleModal = () => {
        setModalOpened(!modalOpened); // Toggle modal visibility
    };

    const closeModal = () => {
        setModalOpened(false); // Close the modal when the close button (X) is clicked
    };

    return (
        <div className="RightSide">
            <div className="NavIcons">
                <HiHome size={24} />
                <IoMdNotificationsOutline size={24} />
                <IoSettingsOutline size={24} />
                <FaRegCommentDots size={24} />
            </div>

            <TrendCard />

            <button className="button r-button" onClick={toggleModal}>
                Share
            </button>

            {/* Conditionally render the modal if modalOpened is true */}
            {modalOpened && <ShareModal onClose={closeModal} />}
        </div>
    );
};

export default RightSide;