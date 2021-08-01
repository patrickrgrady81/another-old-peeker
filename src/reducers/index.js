import betReducer from './betReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bet: betReducer
});

export default rootReducer;