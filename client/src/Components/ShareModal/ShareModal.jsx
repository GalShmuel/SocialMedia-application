// Importing necessary components and icons
import React from 'react'; // React library
import './ShareModel.css'; // Importing the CSS file for styling
import { IoMdClose } from 'react-icons/io'; // Close icon
import PostShare from "../PostShare/PostShare"; // PostShare component for sharing posts

// Defining the ShareModal component
const ShareModal = ({ onClose }) => {
    return (
        <div className="shareModal"> {/* Wrapper for the modal */}
            <div className="modalContent"> {/* Content of the modal */}

                {/* Close button that calls onClose function to close the modal */}
                <IoMdClose className='pointer' onClick={onClose} />

                {/* PostShare component to handle post sharing functionality */}
                <PostShare />
            </div>
        </div>
    );
};

export default ShareModal;
