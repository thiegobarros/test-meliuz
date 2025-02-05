export const get = list => {
    return {
        type: 'get',
        payload: list
    };
};

export const add = elem => {
    return {
        type: 'add',
        payload: elem
    };
};

export const remove = elem => {
    return {
        type: 'remove',
        payload: elem
    };
};

export const edit = elem => {
    return {
        type: 'edit',
        payload: elem
    };
};

export const filter = elem => {
    return {
        type: 'filter',
        payload: elem
    };
};

export const clear = () => {
    return {
        type: 'clear'
    };
};