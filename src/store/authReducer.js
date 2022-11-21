
const defaultState = {
    token: "",
    role: "",
    email: ""
}

const SET_USER_DATA = "SET_USER_DATA";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";


export const authReducer = (state = defaultState , action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {...state, token: action.payload.token, role: action.payload.role, email: action.payload.email}
        case CLEAR_USER_DATA:
            return {...state, ...defaultState}
        default:
            return state
    }
} 


export const setUserDataAction = (payload) => ({type: SET_USER_DATA, payload});
export const clearUserDataAction = () => ({type: CLEAR_USER_DATA});