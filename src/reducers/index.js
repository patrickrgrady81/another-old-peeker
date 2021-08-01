import betReducer from './betReducer';
import creditReducer from './creditsReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bet: betReducer,
    credits: creditReducer
});

export default rootReducer;