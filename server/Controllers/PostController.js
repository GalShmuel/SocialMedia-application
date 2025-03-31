import PostModel from "../Models/postModel.js";  // Import PostModel to interact with the posts in the database
import mongoose from "mongoose";  // Import mongoose for working with MongoDB
import UserModel from "../Models/userModel.js";  // Import UserModel to interact with user data

// Create a new Post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body)  // Create a new post object with the data from the request body

    try {
        await newPost.save()  // Save the post to the database
        res.status(200).json("Post Created")  
    } catch (err) {
        res.status(500).json(err)  
    }
}

// Get a post
export const getPost = async (req, res) => {
    const id = req.params.id  // Get the post ID from the request parameters
    try {
        const post = await PostModel.findById(id)  // Find the post by its ID
        res.status(200).json(post)  
    } catch (err) {
        res.status(500).json(err)  
    }
}

// Update a post
export const updatePost = async (req, res) => {
    const postId = req.params.id  // Get the post ID from the request parameters
    const { userId } = req.body  // Get the user ID from the request body
    try {
        const post = await PostModel.findById(postId)  // Find the post by its ID
        if (post.userId === userId) {  // Check if the user is authorized to update this post
            await post.updateOne({ $set: req.body })  // Update the post with the new data
            res.status(200).json("Post Updated")  
        }
        else {
            res.status(403).json("Unauthorized to update this post")  // Send an error response if not authorized
        }
    } catch (err) {
        res.status(500).json(err)  // Send an error response if something goes wrong
    }
}

// Delete a post
export const deletePost = async (req, res) => {
    const id = req.params.id;  // Get the post ID from the request parameters
    const { userId } = req.body;  // Get the user ID from the request body

    try {
        const post = await PostModel.findById(id)  // Find the post by its ID
        if (post.userId === userId) {  // Check if the user is authorized to delete this post
            await post.deleteOne();  // Delete the post from the database
            res.status(200).json("Post Deleted successfully")  
        }
        else {
            res.status(403).json("Unauthorized to delete this post")  
        }
    } catch (err) {
        res.status(500).json(err)  
    }
}

// Like/Dislike a post
export const likePost = async (req, res) => {
    const id = req.params.id  // Get the post ID from the request parameters
    const { userId } = req.body  // Get the user ID from the request body
    try {
        const post = await PostModel.findById(id)  // Find the post by its ID
        if (!post.likes.includes(userId)) {  // Check if the user hasn't already liked the post
            await post.updateOne({ $push: { likes: userId } })  // Add the user to the likes array
            res.status(200).json("Post Liked")  
        }
        else {
            await post.updateOne({ $pull: { likes: userId } })  // Remove the user from the likes array
            res.status(200).json("Post Unliked")  
        }
    } catch (err) {
        res.status(500).json(err)  
    }
}

// Get Timeline Posts
export const getTimelinePosts = async (req, res) => {
    const userId = req.params.id  // Get the user ID from the request parameters
    try {
        const currentUserPosts = await PostModel.find({ userId: userId })  // Get posts created by the user
        const followingPosts = await UserModel.aggregate([  // Aggregate the posts from the users the current user is following
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)  // Match the user by ID
                }
            },
            {
                $lookup: {
                    from: "posts",  // Look up the posts collection
                    localField: "following",  // Match users the current user is following
                    foreignField: "userId",  // Match posts by userId
                    as: "followingPosts"  // Store the resulting posts in the 'followingPosts' field
                }
            },
            {
                $project: {
                    followingPosts: 1,  // Only return the following posts
                    _id: 0  // Exclude the user ID field
                }
            }
        ])
        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)  // Combine the user's posts and the following users' posts
            .sort((a, b) => {
                return b.createdAt - a.createdAt;  // Sort posts by the creation date in descending order
            })
        );
    } catch (err) {
        res.status(500).json(err)  // Send an error response if something goes wrong
    }
}
