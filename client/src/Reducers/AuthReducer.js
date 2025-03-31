const AuthReducer = (state = { authData: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case 'AUTH_START':
            // When the authentication process starts, we set 'loading' to true and reset any errors.
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'AUTH_SUCCESS':
            // When authentication succeeds, store the 'authData' in the Redux state and save it to localStorage.
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return {
                ...state,
                authData: action.data, // Save user authentication data
                loading: false, // Set loading to false
                error: false // No error, since authentication was successful
            };
        case 'AUTH_FAILURE':
            // When authentication fails, we set 'loading' to false and set 'error' to true.
            return {
                ...state,
                loading: false, // Set loading to false
                error: true // Authentication failed, so there is an error
            };
        default:
            // Default case to return the current state if no action type matches
            return state;
    }
};

export default AuthReducer;
