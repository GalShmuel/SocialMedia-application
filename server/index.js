import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';

// Routes
const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

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

