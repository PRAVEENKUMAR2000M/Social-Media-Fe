const initialState = {
    title: null,
    description: null
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload }
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload }
        case 'UNSET_TITLE':
            return { title: null, description: null }
        default:
            return state
    }
}

export default createPostReducer