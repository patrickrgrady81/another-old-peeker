import betReducer from './betReducer';
import creditReducer from './creditsReducer'
import deckReducer from './deckReducer'
import handReducer from './handReducer'
import holdsReducer from './holdsReducer'
import gameStateReducer from './gameStateReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bet: betReducer,
    credits: creditReducer,
    deck: deckReducer,
    hand: handReducer,
    gameState: gameStateReducer,
    holds: holdsReducer
});

export default rootReducer;