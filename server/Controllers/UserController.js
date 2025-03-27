
import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt"
// get a user 
export const getUser = async (req, res) => {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    try {
        const user = await UserModel.findById(id);

        if (user) {
            const { password, ...otherDetails } = user._doc
            res.status(200).json(otherDetails);
        }
        else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

// update a user

export const updateUser = async (req, res) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus, password } = req.body
    if (id === currentUserId || currentUserAdminStatus) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt)
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("Unauthorized to update this user- You can update your own profile")
    }
}

// delete a user
export const deleteUser = async (req, res) => {
    const id = req.params.id

    const { currentUserId, currentUserAdminStatus } = req.body

    if (currentUserAdminStatus || id === currentUserId) {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted successfully")
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("Unauthorized to delete this user- You can delete your own profile")
    }
}

// Follow a user

export const followUser = async (req, res) => {
    const id = req.params.id
    const { currentUserId } = req.body
    if (currentUserId === id) {
        res.status(403).json("Action Forbidden")
    }
    else {
        try {
            const followUser = await UserModel.findById(id)       // Fetch the user who is to be followed from the database

            const followingUser = await UserModel.findById(currentUserId)   // Fetch the current user who is performing the follow action


            // Check if the current user is already following the target user
            if (!followUser.followers.includes(currentUserId)) {

                // Add the current user to the followers list of the target user
                await followUser.updateOne({ $push: { followers: currentUserId } });

                // Add the target user to the following list of the current user
                await followingUser.updateOne({ $push: { following: id } });
                res.status(200).json("User followed successfully")
            }
            else {
                res.status(403).json("Already following this user")
            }

        } catch (err) {
            res.status(500).json(err);
        }
    }
}



export const unFollowUser = async (req, res) => {
    const id = req.params.id
    const { currentUserId } = req.body
    if (currentUserId === id) {
        res.status(403).json("Action Forbidden")
    }
    else {
        try {
            const followUser = await UserModel.findById(id)       // Fetch the user who is to be unfollowed from the database

            const followingUser = await UserModel.findById(currentUserId)   // Fetch the current user who is performing the unfollow action


            // Check if the current user is already following the target user
            if (followUser.followers.includes(currentUserId)) {

                // unfollow the current user to the followers list of the target user
                await followUser.updateOne({ $pull: { followers: currentUserId } });

                // unfollow the target user to the following list of the current user
                await followingUser.updateOne({ $pull: { following: id } });
                res.status(200).json("User unfollowed successfully")
            }
            else {
                res.status(403).json("User is not followed by you ")
            }

        } catch (err) {
            res.status(500).json(err);
        }
    }
}
