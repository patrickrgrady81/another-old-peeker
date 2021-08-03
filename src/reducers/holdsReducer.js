const holdsReducer = (state = [false, false, false, false, false], action) => {
    switch (action.type){
        case "CHANGEHOLDS": 
            let newState = Object.assign(state)
            newState[action.id] = !state[action.id];
            // console.table(newState);
            
            return state = Object.assign(newState);

        default:
            return state;
    }
}

export default holdsReducer;