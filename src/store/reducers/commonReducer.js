const initialState = {
    showConfirm:false,
    confirmEvent:null,
    isLoading:false
}
export const SHOW_CONFIRM = 'SHOW_CONFIRM';
export const HIDE_CONFIRM = 'HIDE_CONFIRM';
export const SHOW_MSG = 'SHOW_MSG'
export const SHOW_LOADING = 'SHOW_LOADING'

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SHOW_CONFIRM:
        return { ...state, showConfirm:true,confirmEvent:payload.event }
    case HIDE_CONFIRM:
        return { ...state, showConfirm:false }
    case SHOW_MSG:
        alert(payload);
        return state
    case SHOW_LOADING:
        return { ...state, isLoading:payload }
    default:
        return state
    }
}
