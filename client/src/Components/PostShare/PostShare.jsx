import React, { useState, useRef } from 'react'
import profileImage from '../../img/coverPic.jpg'
import './PostShare.css'
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            var img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }

    return (
        <div className="PostShare">
            <img src={profileImage} alt="" />
            <div>
                <input
                    type="text" placeholder="what's happening? " />
                <div className="PostOptions">
                    <div className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}>
                        <HiOutlinePhotograph size={24} />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <MdOutlineVideoLibrary size={24} />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <GrMapLocation size={24} />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--Schedule)" }}>
                        <MdOutlineCalendarMonth size={24} />
                        Schedule
                    </div>
                    <button className='button ps-button'>Share</button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            onChange={onImageChange}
                            ref={imageRef} />
                    </div>
                </div>
                {image &&
                    <div className="PreviewImage">
                        <IoMdClose onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                }
            </div>

        </div>
    )
}

export default PostShare