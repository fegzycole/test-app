import { Dispatch } from 'react';
import { MovieData, SetMovies, SET_MOVIES, SetError, SET_ERROR } from './types';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export const setMovies = (payload: MovieData[]): SetMovies => {
    return {
        type: SET_MOVIES,
        payload,
    };
};

export const setError = (payload: string): SetError => {
    return {
        type: SET_ERROR,
        payload,
    };
};

export const getMovies = (
    searchText: string,
): ((dispatch: Dispatch<{ type: string; payload?: unknown }>) => Promise<void>) => {
    return async (dispatch) => {
        dispatch(setError(''));

        try {
            const request = await axios.get(`${apiUrl}?s=${searchText}&apikey=${apiKey}`);

            const responseData = request.data.Search;

            const movies: MovieData[] = responseData ? (responseData as MovieData[]) : [];

            dispatch(setMovies(movies));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            dispatch(setError('An error occurred, check your internet and try again'));
        }
    };
};
