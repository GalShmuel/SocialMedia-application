import * as AuthApi from '../Api/AuthRequest'

// Action to handle the login process
export const logIn = (formData) => async (dispatch) => {
    // Dispatching an action to indicate the start of the login process
    dispatch({ type: "AUTH_START" })
    try {
        // Making an API request to log in with the provided form data (username and password)
        const { data } = await AuthApi.logIn(formData)
        // Dispatching the success action if login is successful, passing the user data
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (err) {
        console.log(err)
        dispatch({ type: "AUTH_FAILURE" })
    }
}

// Action to handle the signup process
export const signUp = (formData) => async (dispatch) => {
    // Dispatching an action to indicate the start of the signup process
    dispatch({ type: "AUTH_START" })
    try {
        // Making an API request to sign up with the provided form data (username, password, etc.)
        const { data } = await AuthApi.signUp(formData)
        // Dispatching the success action if signup is successful, passing the user data
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (err) {
        console.log(err)
        dispatch({ type: "AUTH_FAILURE" })
    }
}