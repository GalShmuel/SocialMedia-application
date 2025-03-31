import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    // Required fields
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            require: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        // Optional fields
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        relationship: String,
        followers: [],
        following: []
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
)

// Create the User model based on the schema
const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;