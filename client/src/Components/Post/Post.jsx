// Importing necessary modules and icons
import React from 'react'; // React library
import './Post.css'; // Importing the CSS file for styling
import { GoHeart } from "react-icons/go"; // Importing the heart icon (empty)
import { GoHeartFill } from "react-icons/go"; // Importing the heart icon (filled)
import { FaRegComment } from "react-icons/fa6"; // Importing the comment icon
import { TbShare3 } from "react-icons/tb"; // Importing the share icon

// Defining the Post component
const Post = ({ data }) => {
  return (
    <div className="Post">
      {/* Displaying the image of the post */}
      <img src={data.img} alt="" />

      <div className='PostReact'>
        {/* Conditionally rendering filled or empty heart based on the 'liked' status */}
        {data.liked ? <GoHeartFill size={24} /> : <GoHeart size={24} />}

        {/* Displaying the comment and share icons */}
        <FaRegComment size={24} />
        <TbShare3 size={24} />
      </div>

      {/* Displaying the number of likes */}
      <span> {data.likes} likes</span>

      <div className="Detail">
        {/* Displaying the post name and description */}
        <span><b>{data.name} </b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

// Exporting the Post component for use in other parts of the app
export default Post;
