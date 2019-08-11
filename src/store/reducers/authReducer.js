const initialState = {

}

export default (state = initialState, { type, payload }) => {
    return state;
    switch (type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}
