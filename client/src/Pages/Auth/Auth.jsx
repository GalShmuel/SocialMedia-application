import React from 'react'; // Importing React library
import './Auth.css'; // Importing CSS for styling
import { VscEditSession } from "react-icons/vsc"; // Importing icon for session
import { useState } from "react"; // Importing useState hook to manage state
import { useDispatch, useSelector } from 'react-redux'; // Importing hooks for Redux state management
import { logIn, signUp } from '../../Actions/AuthAction'; // Importing actions for login and signup

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true); // State to toggle between signup and login forms
    const dispatch = useDispatch(); // Hook to dispatch actions
    const loading = useSelector((state) => state.AuthReducer.loading); // Getting loading state from Redux
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        confirmPassword: "",
        username: ""
    }); // State to hold form data

    const [confirmpassword, setConfirmPassword] = useState(true); // State to handle password confirmation check

    // Function to handle form field changes
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value }); // Updating the respective field
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing default form submission
        if (isSignUp) {
            // If it's a signup form, check if passwords match
            data.password === data.confirmPassword
                ? dispatch(signUp(data)) // Dispatch signup action
                : setConfirmPassword(false); // If passwords don't match, show error
        } else {
            // If it's a login form, dispatch login action
            dispatch(logIn(data));
        }
    };

    // Function to reset the form fields
    const resetForm = () => {
        setData({
            firstname: "",
            lastname: "",
            password: "",
            confirmPassword: "",
            username: ""
        });
        setConfirmPassword(true); // Reset password confirmation state
    };

    return (
        <div className="Auth">
            {/* Left side of the Auth component */}
            <div className="a-left">
                <div className="VscEditSession">
                    <VscEditSession size={90} /> {/* Session icon */}
                </div>
                <div className="Webname">
                    <h1>Social Media</h1> {/* Webname */}
                    <h6>Explore people around the world</h6> {/* Web description */}
                </div>
            </div>

            {/* Right side of the Auth component */}
            <div className="a-right">
                <form className="InfoForm AuthForm" onSubmit={handleSubmit}> {/* Form for login/signup */}
                    <h3>{isSignUp ? "Sign Up" : "Log In"}</h3> {/* Dynamic heading based on signup/login */}

                    {isSignUp && (
                        <div>
                            {/* Fields for signup form */}
                            <input type="text"
                                placeholder='First Name'
                                className='InfoInput'
                                name='firstname'
                                onChange={handleChange}
                                value={data.firstname} />
                            <input type="text"
                                placeholder='Last Name'
                                className='InfoInput'
                                name='lastname'
                                onChange={handleChange}
                                value={data.lastname} />
                        </div>
                    )}

                    {/* Common fields for both signup and login */}
                    <div>
                        <input type="text"
                            placeholder='Username'
                            className="InfoInput"
                            name='username'
                            onChange={handleChange}
                            value={data.username} />
                    </div>
                    <div>
                        <input type="password"
                            placeholder='Password'
                            className="InfoInput"
                            name='password'
                            onChange={handleChange}
                            value={data.password} />

                        {/* Password confirmation field for signup */}
                        {isSignUp && (
                            <input type="password"
                                placeholder='Confirm Password'
                                className="InfoInput"
                                name='confirmPassword'
                                onChange={handleChange}
                                value={data.confirmPassword} />
                        )}
                    </div>

                    {/* Show error message if passwords don't match */}
                    <span style={{
                        display: confirmpassword ? "none" : "block",
                        color: 'red',
                        fontSize: '12px',
                        alignSelf: "flex-end",
                        marginRight: '5px'
                    }}>
                        * Confirm Password - are not the same
                    </span>

                    {/* Toggle between SignUp and LogIn */}
                    <div>
                        <span
                            onClick={() => { setIsSignUp((prev) => !prev); resetForm(); }} // Switch between forms
                            className='pointer'>
                            {isSignUp ? "Already have an account? Login!" : "Don't have an account? Sign Up!"}
                        </span>
                    </div>

                    {/* Submit button */}
                    <button className="button InfoButton" type="submit" disabled={loading}>
                        {loading ? "Loading..." : isSignUp ? "SignUp" : "LogIn"}</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
