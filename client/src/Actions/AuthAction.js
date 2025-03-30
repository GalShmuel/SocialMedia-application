import * as AuthApi from '../Api/AuthRequest'
export const logIn = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.logIn(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (err) {
        console.log(err)
        dispatch({ type: "AUTH_FAILURE"})
    }
}

export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.signUp(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (err) {
        console.log(err)
        dispatch({ type: "AUTH_FAILURE"})
    }
}