const creditsReducer = (state = 100, action) => {
    switch (action.type){
        case "ADDCREDITS": 
            return state + action.payload;
        case "REMOVECREDITS":
            return state - action.payload;
        default:
            return state;
    }
}

export default creditsReducer;