import { combineReducers } from 'redux';
import { FETCH_ARTICLES } from '../constants/ActionTypes';

function articles(state=[], action){
    switch(action.type){
        case FETCH_ARTICLES:
            return action.articles;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    articles
});

export default rootReducer;