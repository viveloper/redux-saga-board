import { combineReducers } from 'redux';
import postsReducer, { postsSaga } from './posts';
import { all } from 'redux-saga/effects';

export function* saga() {
  yield all([postsSaga()]);
}

const reducer = combineReducers({
  posts: postsReducer,
});

export default reducer;
