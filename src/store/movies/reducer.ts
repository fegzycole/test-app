import { MoviesActionTypes, MoviesState, SET_MOVIES, SET_ERROR } from './types';

const initialState: MoviesState = {
    movies: undefined,
    fetchingMovies: false,
    error: '',
};

const moviesReducer = (state: MoviesState = initialState, action: MoviesActionTypes) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default moviesReducer;
