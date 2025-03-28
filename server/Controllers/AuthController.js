import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// Registering  a new user
export const registerUser = async (req, res) => {
    const { username, password, firstname, lastname } = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt) 

    const newUser = new UserModel({ username, password: hashedPass, firstname, lastname })
    
    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// Login a user
export const loginUser = async (req, res) => { 
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username });
        if (user) {
            const validity = await bcrypt.compare(password, user.password)
            validity ? res.status(200).json(user) : res.status(400).json(user.password +" Wrong Password "+password)
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    } catch(err) {
        res.status(500).json({ message: err.message }); 
    }
}