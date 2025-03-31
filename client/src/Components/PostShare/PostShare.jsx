// Importing necessary modules and components
import React, { useState, useRef } from 'react'; // React hooks and useRef for handling state and references
import profileImage from '../../img/coverPic.jpg'; // Importing the default profile image
import './PostShare.css'; // Importing the CSS file for styling
import { HiOutlinePhotograph } from "react-icons/hi"; // Importing photo icon
import { MdOutlineVideoLibrary } from "react-icons/md"; // Importing video icon
import { GrMapLocation } from "react-icons/gr"; // Importing location icon
import { MdOutlineCalendarMonth } from "react-icons/md"; // Importing calendar icon
import { IoMdClose } from "react-icons/io"; // Importing close icon

// Defining the PostShare component
const PostShare = () => {
    const [image, setImage] = useState(null); // State to handle the uploaded image
    const imageRef = useRef(); // Ref for the image input element

    // Function to handle image change
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) { // Check if a file is selected
            var img = event.target.files[0]; // Get the selected image file
            setImage({
                image: URL.createObjectURL(img), // Create an object URL for the selected image
            });
        }
    }

    return (
        <div className="PostShare">
            <img src={profileImage} alt="" /> {/* Displaying the profile image */}
            <div>
                <input
                    type="text" placeholder="what's happening? " /> {/* Input for text content */}
                <div className="PostOptions">
                    {/* Option for uploading photo */}
                    <div className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}> {/* Trigger file input when clicked */}
                        <HiOutlinePhotograph size={24} /> {/* Icon for photo */}
                        Photo
                    </div>
                    {/* Option for uploading video */}
                    <div className="option" style={{ color: "var(--video)" }}>
                        <MdOutlineVideoLibrary size={24} /> {/* Icon for video */}
                        Video
                    </div>
                    {/* Option for adding location */}
                    <div className="option" style={{ color: "var(--location)" }}>
                        <GrMapLocation size={24} /> {/* Icon for location */}
                        Location
                    </div>
                    {/* Option for scheduling post */}
                    <div className="option" style={{ color: "var(--Schedule)" }}>
                        <MdOutlineCalendarMonth size={24} /> {/* Icon for calendar */}
                        Schedule
                    </div>
                    {/* Button to share the post */}
                    <button className='button ps-button'>Share</button>
                    <div style={{ display: "none" }}>
                        {/* Hidden file input for image upload */}
                        <input
                            type="file"
                            name="myImage"
                            onChange={onImageChange} // Call onImageChange when a file is selected
                            ref={imageRef} /> {/* Referencing the input element */}
                    </div>
                </div>

                {/* Displaying the preview of the image if it's selected */}
                {image &&
                    <div className="PreviewImage">
                        <IoMdClose onClick={() => setImage(null)} /> {/* Close the image preview */}
                        <img src={image.image} alt="" /> {/* Display the selected image */}
                    </div>
                }
            </div>
        </div>
    );
}

export default PostShare; // Exporting the component to be used elsewhere
