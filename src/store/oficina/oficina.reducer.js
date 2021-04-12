const INITIAL_STATE = {
    all: [
        {
            id: 1,
            curso: "Oficina 1"
        },
        {
            id: 2,
            curso: "Oficina 2"
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => { // tamara recebe
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
