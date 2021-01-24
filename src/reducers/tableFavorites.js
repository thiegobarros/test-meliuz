const tableFavorites = (state = false, action) => {
    switch(action.type) {
        case "set":
            return !state;
        default:
            return state;
    }
};

export default tableFavorites;