import { combineReducers } from 'redux';

//Reducers
import { gamesReducer } from './games/games.reducer'
import { detailReducer } from './detail/detail.reducer'

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer
})

export default rootReducer;