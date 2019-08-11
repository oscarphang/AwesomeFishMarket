const initialState = {
    isSignedIn:false
}
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN:
        return { ...state, isSignedIn:true }
    case LOGOUT:
        return { ...state, isSignedIn:false }

    default:
        return state
    }
}
