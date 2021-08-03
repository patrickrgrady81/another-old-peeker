import betReducer from './betReducer';
import creditReducer from './creditsReducer'
import deckReducer from './deckReducer'
import handReducer from './handReducer'
import holdsReducer from './holdsReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bet: betReducer,
    credits: creditReducer,
    deck: deckReducer,
    hand: handReducer,
    holds: holdsReducer
});

export default rootReducer;