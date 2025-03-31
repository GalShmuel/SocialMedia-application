// Importing necessary modules and components
import React from 'react'; // React for functional component
import './PostSide.css'; // Importing the CSS file for styling
import PostShare from '../PostShare/PostShare'; // Importing the PostShare component for sharing new posts
import Posts from '../Posts/Posts'; // Importing the Posts component to display all posts

// Defining the PostSide component
const PostSide = () => {
    return (
        <div className="PostSide">
            {/* PostShare component for creating and sharing new posts */}
            <PostShare />
            {/* Posts component to display all existing posts */}
            <Posts />
        </div>
    )
}

export default PostSide; // Exporting the component to be used elsewhere
