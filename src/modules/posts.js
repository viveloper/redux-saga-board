import { takeLatest, call, put, getContext } from 'redux-saga/effects';
import * as postsApi from '../api/posts';

export const GET_POSTS = 'posts/GET_POSTS';
export const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';
export const GET_POST = 'posts/GET_POST';
export const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
export const GET_POST_ERROR = 'posts/GET_POST_ERROR';
export const CREATE_POST = 'posts/CREATE_POST';
export const CREATE_POST_SUCCESS = 'posts/CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'posts/CREATE_POST_ERROR';
export const GO_TO_POST = 'posts/GO_TO_POST';

export const getPosts = (keepData) => ({ type: GET_POSTS, keepData });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });
export const createPost = (post) => ({ type: CREATE_POST, payload: post });
export const goToPost = (id) => ({ type: GO_TO_POST, payload: id });

function* getPostsSaga() {
  try {
    const posts = yield call(postsApi.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: posts,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_ERROR,
      payload: e,
      error: true,
    });
  }
}

function* getPostSaga(action) {
  const id = action.payload;
  try {
    const post = yield call(postsApi.getPost, id);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post,
      meta: action.meta,
    });
  } catch (e) {
    yield put({
      type: GET_POST_ERROR,
      payload: e,
      error: true,
      meta: action.meta,
    });
  }
}

function* createPostSaga(action) {
  const post = action.payload;
  try {
    const result = yield call(postsApi.createPost, post);
    yield put({
      type: CREATE_POST_SUCCESS,
      payload: result,
    });
    const history = yield getContext('history');
    history.push(`/posts/${result.id}`);
  } catch (e) {
    yield put({
      type: CREATE_POST_ERROR,
      payload: e,
      error: true,
    });
  }
}

function* goToPostSaga(action) {
  const id = action.payload;
  const history = yield getContext('history');
  history.push(`/posts/${id}`);
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsSaga);
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(CREATE_POST, createPostSaga);
  yield takeLatest(GO_TO_POST, goToPostSaga);
}

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {},
  write: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: action.keepData ? state.posts.data : null,
          error: null,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case GET_POST:
      return {
        ...state,
        post: {
          ...state.post,
          [action.meta]: state.post[action.meta]
            ? state.post[action.meta]
            : {
                loading: true,
                data: null,
                error: null,
              },
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          [action.meta]: {
            loading: false,
            data: action.payload,
            error: null,
          },
        },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          [action.meta]: {
            loading: false,
            data: null,
            error: action.payload,
          },
        },
      };
    case CREATE_POST:
      return {
        ...state,
        write: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        write: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case CREATE_POST_ERROR:
      return {
        ...state,
        write: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
