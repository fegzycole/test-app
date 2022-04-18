import React from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/movies/actions';
import { StyledBox, StyledTextField, StyledIconButton, StyledSearchIcon } from './styles';

export interface SearchBarProps {
    searchText: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchText, handleChange }) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        await dispatch(getMovies(searchText));
    };
    return (
        <StyledBox>
            <StyledTextField value={searchText} onChange={handleChange} placeholder="Enter Text Here" />
            <StyledIconButton onClick={handleClick} disabled={!searchText} data-testid="btn">
                <StyledSearchIcon />
            </StyledIconButton>
        </StyledBox>
    );
};

export default SearchBar;
