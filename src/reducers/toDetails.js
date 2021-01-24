const toDetailsReducer = (state = '', action) => {
    switch(action.type) {
        case "url":
            return state = action.payload;
        default:
            return state;
    }
};

export default toDetailsReducer;