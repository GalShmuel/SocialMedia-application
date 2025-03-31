import UserModel from "../Models/userModel.js";  // Import UserModel to interact with the user data in the database
import bcrypt from "bcrypt"  // Import bcrypt for password hashing

// Get a user by ID
export const getUser = async (req, res) => {
    const id = req.params.id;  // Get the user ID from the request parameters

    try {
        const user = await UserModel.findById(id);  // Find the user by ID from the database

        if (user) {
            const { password, ...otherDetails } = user._doc;  // Exclude the password from the user data
            res.status(200).json(otherDetails);
        }
        else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

// Update a user
export const updateUser = async (req, res) => {
    const id = req.params.id;  // Get the user ID from the request parameters
    const { currentUserId, currentUserAdminStatus, password } = req.body;  // Get the current user ID and admin status from the request body

    if (id === currentUserId || currentUserAdminStatus) {  // Check if the current user is authorized to update the profile
        try {
            if (password) {  // If a new password is provided
                const salt = await bcrypt.genSalt(10);  // Generate a salt for hashing
                req.body.password = await bcrypt.hash(password, salt);  // Hash the password before saving
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });  // Update the user details in the database
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("Unauthorized to update this user- You can't update your own profile");
    }
}

// Delete a user
export const deleteUser = async (req, res) => {
    const id = req.params.id;  // Get the user ID from the request parameters
    const { currentUserId, currentUserAdminStatus } = req.body;  // Get the current user ID and admin status from the request body

    if (currentUserAdminStatus || id === currentUserId) {  // Check if the current user is authorized to delete the user
        try {
            await UserModel.findByIdAndDelete(id);  // Delete the user from the database
            res.status(200).json("User deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("Unauthorized to delete this user- You can delete your own profile");
    }
}

// Follow a user
export const followUser = async (req, res) => {
    const id = req.params.id;  // Get the user ID of the user to be followed
    const { currentUserId } = req.body;  // Get the current user ID from the request body

    if (currentUserId === id) {  // Check if the user is trying to follow themselves
        res.status(403).json("Action Forbidden");
    }
    else {
        try {
            const followUser = await UserModel.findById(id);  // Fetch the user to be followed
            const followingUser = await UserModel.findById(currentUserId);  // Fetch the current user

            if (!followUser.followers.includes(currentUserId)) {  // Check if the current user is not already following the target user
                // Add the current user to the followers list of the target user
                await followUser.updateOne({ $push: { followers: currentUserId } });
                // Add the target user to the following list of the current user
                await followingUser.updateOne({ $push: { following: id } });
                res.status(200).json("User followed successfully");
            }
            else {
                res.status(403).json("Already following this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

// Unfollow a user
export const unFollowUser = async (req, res) => {
    const id = req.params.id;  // Get the user ID of the user to be unfollowed
    const { currentUserId } = req.body;  // Get the current user ID from the request body

    if (currentUserId === id) {  // Check if the user is trying to unfollow themselves
        res.status(403).json("Action Forbidden");
    }
    else {
        try {
            const followUser = await UserModel.findById(id);  // Fetch the user to be unfollowed
            const followingUser = await UserModel.findById(currentUserId);  // Fetch the current user

            if (followUser.followers.includes(currentUserId)) {  // Check if the current user is already following the target user
                // Remove the current user from the followers list of the target user
                await followUser.updateOne({ $pull: { followers: currentUserId } });
                // Remove the target user from the following list of the current user
                await followingUser.updateOne({ $pull: { following: id } });
                res.status(200).json("User unfollowed successfully");
            }
            else {
                res.status(403).json("User is not followed by you");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
