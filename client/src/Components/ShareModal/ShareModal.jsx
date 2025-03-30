
import React from 'react';
import './ShareModel.css';
import { IoMdClose } from 'react-icons/io';
import PostShare from "../PostShare/PostShare";

const ShareModal = ({ onClose }) => {
    return (
        <div className="shareModal">
            <div className="modalContent">

                <IoMdClose className='pointer' onClick={onClose} />

                <PostShare />
            </div>
        </div>
    );
};

export default ShareModal;
