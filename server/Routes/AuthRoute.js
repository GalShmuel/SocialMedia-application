import express from 'express';
import { registerUser, loginUser } from '../Controllers/AuthController.js'; // Importing controller functions

const router = express.Router(); // Create a new router instance

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

export default router; 
