const handReducer = (state = [], action) => {
    switch (action.type){
        case "SAVEHAND": 
            return state = Object.assign(action.payload);

        default:
            return state;
    }
}

export default handReducer;