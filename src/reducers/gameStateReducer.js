const gameStateReducer = (state = 'START', action) => {
    switch (action.type){
        case "CHANGEGAMESTATE": 
            switch (state) {
                case 'START':
                    return state = 'DRAW';
                case 'DRAW':
                    return state = 'DEAL'
                case 'DEAL':
                    return state = 'DRAW'
                default:
                    break;
            }
            break;
        default:
            return state;
    }
}

export default gameStateReducer;