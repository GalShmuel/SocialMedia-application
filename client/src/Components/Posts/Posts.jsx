// Importing necessary modules
import React from 'react'; // React library
import './Posts.css'; // Importing the CSS file for styling
import { PostsData } from '../../Data/PostData'; // Importing the data for the posts
import Post from '../Post/Post'; // Importing the Post component to display individual posts

// Defining the Posts component
const Posts = () => {
    return (
        <div className="Posts">
            {/* Mapping through the PostsData array and rendering a Post component for each item */}
            {PostsData.map((post, id) => {
                return <Post data={post} id={id} />; // Passing post data and id to the Post component
            })}
        </div>
    );
}

// Exporting the Posts component for use in other parts of the app
export default Posts;
