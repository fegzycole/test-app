import axios from 'axios';
import { mockMovies } from '../../testUtils/movies';
import { getMovies } from './actions';
import { SET_ERROR, SET_MOVIES } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockGet = axios.get as jest.Mock<any>;
const mockDispatch = jest.fn();

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('getMovies', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('when the API returns a success response', () => {
        beforeEach(() => {
            mockGet.mockImplementation(() => ({
                data: {
                    Search: mockMovies,
                },
            }));

            getMovies('mock search text')(mockDispatch);
        });

        it('should set the received data to the state', () => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: SET_MOVIES,
                payload: mockMovies,
            });
        });
    });

    describe('when the API returns an error response', () => {
        beforeEach(() => {
            mockGet.mockImplementation(() => new Error('An error'));

            getMovies('mock search text')(mockDispatch);
        });

        it('should set the received data to the state', () => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: SET_ERROR,
                payload: 'An error occurred, check your internet and try again',
            });
        });
    });
});
