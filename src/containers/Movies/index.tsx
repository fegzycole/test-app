import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { StyledGrid, Container } from './styles';
import MessageBox from '../../components/MessageBox';
import MovieCard from '../../components/MovieCard';

export const Movies: React.FC = () => {
    const { movies } = useSelector((state: RootState) => state.movies);
    const [searchText, setSearchText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const getDisplayedMovies = () => {
        if (!movies) {
            return (
                <MessageBox text="Welcome to Our service, please type the title of the movie you would like to search for in the input field above!" />
            );
        }

        if (!movies.length) {
            return <MessageBox text={`No Movie(s) with the title "${searchText}" found`} />;
        }

        return movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />);
    };

    return (
        <Container>
            <SearchBar searchText={searchText} handleChange={handleChange} />
            <StyledGrid container spacing={4}>
                {getDisplayedMovies()}
            </StyledGrid>
        </Container>
    );
};

export default Movies;
