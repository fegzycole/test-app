import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { moviesReducer } from './movies';

const appReducer = combineReducers({
    movies: moviesReducer,
});

const middlewares = applyMiddleware(thunkMiddleware);

export type RootState = ReturnType<typeof appReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: RootState | undefined, action: any) => {
    return appReducer(state, action);
};

const store = createStore(rootReducer, middlewares);

export default store;
