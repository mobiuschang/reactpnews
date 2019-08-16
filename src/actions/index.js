import * as types from '../constants/ActionTypes';

export const fetchArticles = (articles) => {
    return {
        type: types.FETCH_ARTICLES,
        articles
    }
};