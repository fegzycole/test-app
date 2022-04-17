import { MovieData } from '../store/movies/types';

export const mockMovie: MovieData = {
    Title: 'Mock Title',
    Type: 'Mock Type',
    imdbID: 'Mock ID',
    Year: '2022',
    Poster: 'Mock Poster',
};

export const mockMovies: MovieData[] = [mockMovie];
