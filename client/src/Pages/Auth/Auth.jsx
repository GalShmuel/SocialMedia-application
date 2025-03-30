import React from 'react'
import './Auth.css'
import { VscEditSession } from "react-icons/vsc";
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../Actions/AuthAction';
const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.AuthReducer.loading)
    console.log(loading)
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        confirmPassword: "",
        username: ""
    });

    const [confirmpassword, setConfirmPassword] = useState(true)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmPassword
                ? dispatch(signUp(data))
                : setConfirmPassword(false);
        } else {
            dispatch(logIn(data))
        }
    };

    const resetForm = () => {
        setData({
            firstname: "",
            lastname: "",
            password: "",
            confirmPassword: "",
            username: ""
        });
        setConfirmPassword(true)
    }
    return (
        <div className="Auth">
            {/* Left side */}
            <div className="a-left">
                <div className="VscEditSession">
                    <VscEditSession size={90} />
                </div>
                <div className="Webname">
                    <h1>Social Media</h1>
                    <h6>Explore people around the world</h6>
                </div>
            </div>
            {/* <RightSide /> */}
            <div className="a-right">
                <form className="InfoForm AuthForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

                    {isSignUp && (
                        <div>
                            <input type="text"
                                placeholder='First Name'
                                className='InfoInput'
                                name='firstname'
                                onChange={handleChange}
                                value={data.firstname}

                            />
                            <input type="text"
                                placeholder='Last Name'
                                className='InfoInput'
                                name='lastname'
                                onChange={handleChange}
                                value={data.lastname}


                            />
                        </div>
                    )}

                    <div>
                        <input type="text"
                            placeholder='Username'
                            className="InfoInput"
                            name='username'
                            onChange={handleChange}
                            value={data.username}

                        />

                    </div>
                    <div>
                        <input type="password"
                            placeholder='Password'
                            className="InfoInput"
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                        />


                        {isSignUp && (

                            <input type="password"
                                placeholder='Confirm Password'
                                className="InfoInput"
                                name='confirmPassword'
                                onChange={handleChange}
                                value={data.confirmPassword}
                            />
                        )}
                    </div>
                    <span
                        style={
                            {
                                display: confirmpassword ? "none" : "block",
                                color: 'red',
                                fontSize: '12px',
                                alignSelf: "flex-end",
                                marginRight: '5px'
                            }}>
                        * Confirm Password - are not the same
                    </span>

                    <div>
                        <span
                            onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}
                            className='pointer'>
                            {isSignUp ? "Already have an account. Login!"
                                : "Don't have an account? Sign Up!"}
                        </span>
                    </div>
                    <button className="button InfoButton" type="submit" disabled={loading}>
                        {loading ? "Loading..." : isSignUp ? "SignUp" : "LogIn"}</button>
                </form>
            </div >

        </div >
    )
}

export default Auth