const dataReducer = (state = [], action) => {
    switch(action.type) {
        case "get":
            let store = action.payload.map(item => {
                Object.defineProperty(item, 'favorite', {value: false, writable: true});
                Object.defineProperty(item, 'filtered', {value: false, writable: true});
                return item;
            });
            return state = store;
        case "add":
            return [action.payload, ...state];
        case "remove":
            return state.filter(item => item.id !== action.payload);
        case "edit":
            let updated = state.filter(item => item.id !== action.payload.id);
            return [action.payload, ...updated];
        case "filter":
            let filtered = state.map(item => {
                if (item.name.includes(action.payload)) {
                    item.filtered = true; 
                } else {
                    item.filtered = false;
                }
                return item;
            });
            return [...filtered];
        default:
            return state;
    }
};

export default dataReducer;