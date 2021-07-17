import AuthService from "../../services/auth";
import {LOGIN_USER} from "../../assets/constants";
import {Dispatch} from "redux";

interface UserData {
    email: string,
    password: string,
    isRemember: boolean
}

const loginUser = (data: string) => ({
    type: LOGIN_USER,
    payload: data
})

export const getUser = () => (dispatch: Dispatch) => {
    const token = AuthService.getUser()
    if (token) {
        dispatch(loginUser(token))
        return true
    }
    console.log('no token')
    return false
}
export const logInTo = (userData: UserData) => async (dispatch: Dispatch) => {
    const token = await AuthService.login(userData);
    if (token) {
        dispatch(loginUser(token))
        return true
    }
    return false
}
