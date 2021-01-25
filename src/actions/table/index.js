export const set = () => {
    return {
        type: 'set'
    };
};

export const search = elem => {
    return {
        type: 'search',
        payload: elem
    }
}