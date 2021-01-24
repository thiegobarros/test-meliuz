const toDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case "character":
            return state = action.payload;
        default:
            return state;
    }
};

export default toDetailsReducer;