import mongoose from "mongoose";

// Define the schema for the Post model
const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true, // The userId is required for each post
    },
    desc: String, // Optional description of the post
    likes: [], // Array to store the IDs of users who liked the post
    image: String, // Optional field for image associated with the post
},
    { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the Post model based on the schema
var PostModel = mongoose.model("Posts", postSchema);

export default PostModel; // Export the Post model for use in other parts of the application
