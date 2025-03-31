import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';

// Routes
const app = express(); // Create a new express app
dotenv.config(); // Load environment variables from .env file

// Middleware configuration
app.use(bodyParser.json({ limit: '30mb', extended: true })); // Parse JSON with size limit
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); // Parse URL-encoded data
app.use(cors()); // Enable CORS for all origins

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_DB)
    .then(() =>
        app.listen(process.env.PORT, () =>
            console.log(`listening on port ${process.env.PORT}`)
        )
    ).catch((error) => console.error(error));


// usage of route
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute)

