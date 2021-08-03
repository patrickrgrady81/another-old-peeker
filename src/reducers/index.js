import betReducer from './betReducer';
import creditReducer from './creditsReducer'
import deckReducer from './deckReducer'
import handReducer from './handReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bet: betReducer,
    credits: creditReducer,
    deck: deckReducer,
    hand: handReducer
});

export default rootReducer;