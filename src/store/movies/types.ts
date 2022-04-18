export const SET_MOVIES = 'SET_MOVIES';
export const SET_ERROR = 'SET_ERROR';

export interface MovieData {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface MoviesState {
    movies?: MovieData[];
    fetchingMovies: boolean;
    error: string;
}

export interface SetMovies {
    type: typeof SET_MOVIES;
    payload: MovieData[];
}

export interface SetError {
    type: typeof SET_ERROR;
    payload: string;
}

export type MoviesActionTypes = SetMovies | SetError;
