
const initialState = {
    user: null,
    // userProfile: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.plyload }
        // case 'SET_USERPROFILE':
        //     return { ...state, userProfile: action.plyload }
        case 'UNSET_USER':
            return { user: null, userProfile: null }
        default:
            return state
    }
}
export default userReducer;