const holdsReducer = (state = [false, false, false, false, false], action) => {
    switch (action.type){
        case "CHANGEHOLDS": 
            let newState = Object.assign(state)
            newState[action.id] = !state[action.id];
            return state = Object.assign(newState);
        case "RESET":
            const holds = document.querySelectorAll('.hold-button');
            for (let hold of holds) {
                hold.classList.add('light-red');
                hold.classList.remove('dark-red');
            }
            return state = [false, false, false, false, false];
        default:
            return state;
    }
}

export default holdsReducer;