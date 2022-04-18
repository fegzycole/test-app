import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { MovieData } from '../../store/movies/types';
import { StyledGrid, StyledCard, StyledCardContent, StyledTypography } from './styles';

export interface MovieCardProps {
    movie: MovieData;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { Title, Poster } = movie;

    return (
        <StyledGrid container item xs={10} md={4} lg={3}>
            <StyledCard>
                <CardMedia component="img" height="250" image={Poster} alt="movie-poster" />
                <StyledCardContent>
                    <StyledTypography>{Title}</StyledTypography>
                </StyledCardContent>
            </StyledCard>
        </StyledGrid>
    );
};

export default MovieCard;
