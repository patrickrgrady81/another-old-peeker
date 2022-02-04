const handValueReducer = (state = 0, action) => {
    switch (action.type){
        case "GETHANDVALUE": 
            return state;
        case "SETHANDVALUE":
            return Object.assign(state, action.payload);



        default:
            return state;
    }
}

export default handValueReducer;