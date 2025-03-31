import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Registering a new user
export const registerUser = async (req, res) => {
    try {
        // Generate a salt and hash the user's password for security
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPass;

        // Create a new user instance with the request body
        const newUser = new UserModel(req.body);
        const { username } = req.body;

        // Check if the username is already registered
        const oldUser = await UserModel.findOne({ username });
        if (oldUser) {
            return res.status(400).json({ message: "Username is already registered!" });
        }

        // Save the new user to the database
        const user = await newUser.save();

        // Generate a JWT token for authentication
        const token = jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWT_KEY,
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Send the response with the user object and token
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login an existing user
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username in the database
        const user = await UserModel.findOne({ username: username });

        if (user) {
            // Compare the provided password with the hashed password in the database
            const validity = await bcrypt.compare(password, user.password);

            if (!validity) {
                res.status(400).json("Wrong password");
            } else {
                // Generate a JWT token for authentication
                const token = jwt.sign(
                    { username: user.username, id: user._id },
                    process.env.JWT_KEY,
                    { expiresIn: '1h' } // Token expires in 1 hour
                );
                res.status(200).json({ user, token });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
