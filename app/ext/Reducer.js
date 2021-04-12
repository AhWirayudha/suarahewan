const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_HEWAN':
            return {
                ...state,
                hewan: action.payload
            };
        // case 'ADD_HEWAN':
        //     return {
        //         ...state,
        //         posts: state.posts.concat(action.payload)
        //     };
        // case 'REMOVE_HEWAN':
        //     return {
        //         ...state,
        //         posts: state.posts.filter(post => post.id !== action.payload)
        //     };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;