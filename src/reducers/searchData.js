const searchData = (state = false, action) => {
    switch(action.type) {
        case "search":
            return state = action.payload;
        default:
            return state;
    }
};

export default searchData;