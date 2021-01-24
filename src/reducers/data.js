const dataReducer = (state = [], action) => {
    switch(action.type) {
        case "get":
            let store = action.payload.map(item => Object.defineProperty(item, 'favorite', {value: false, writable: true}));
            return state = store;
        case "add":
            return [action.payload, ...state];
        case "remove":
            return state.filter(item => item.id !== action.payload);
        case "edit":
            let updated = state.filter(item => item.id !== action.payload.id);
            return [action.payload, ...updated];
        default:
            return state;
    }
};

export default dataReducer;