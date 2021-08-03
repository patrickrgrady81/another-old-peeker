const deckReducer = (state = [], action) => {
    switch (action.type){
        case "SAVEDECK": 
            return state = Object.assign(action.payload);

        default:
            return state;
    }
}

export default deckReducer;