import {LOGIN_USER} from "../../assets/constants";
import {PayloadAction} from "@reduxjs/toolkit";

interface State {
    token: string | undefined;
    isLogged: boolean;
}

const initialState: State = {
    token: undefined,
    isLogged: false
}

export default function loginReducer(state: State = initialState, action: PayloadAction<string>): State {
    switch (action.type) {
        case LOGIN_USER:
            return {
                token: action.payload,
                isLogged: true,
            }
        default:
            return state
    }
}
