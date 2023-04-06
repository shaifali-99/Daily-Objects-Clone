import axios from 'axios';
import { AUTHENTICATION_ERROR, AUTHENTICATION_LOADING, POST_SIGNUP_SUCCESS } from './actionTypes';

const authLoading = () => {
    return { type: AUTHENTICATION_LOADING }
}
const signUpUserSuccess = (payload) => {
    return { type: POST_SIGNUP_SUCCESS, payload }
}
const authError = () => {
    return { type: AUTHENTICATION_ERROR }
}
export const signUp = async (dispatch) => {
    dispatch(authLoading());
    try {
        (await axios.post("https://dailyobjects-f06p.onrender.com/users"))
            .then((res) => {
                dispatch(signUpUserSuccess(res.data));
                console.log(res);
            })
            .catch((err) => {
                dispatch(authError())
                console.log(err);
            })
    }
    catch(err){
        console.log(err.message);
    }
}