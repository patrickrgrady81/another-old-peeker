const betReducer = (state = 1, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1; 
        case 'DECREMENT':
            return state - 1;
        case 'BETONE':
            return state = 1;
        case 'BETFIVE':
            return state = 5;
        default:
            return state;
    }
}

export default betReducer;