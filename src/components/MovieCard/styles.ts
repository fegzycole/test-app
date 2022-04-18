import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

export const StyledGrid = styled(Grid, {
    name: 'StytledGrid',
    slot: 'Wrapper',
})``;

export const StyledCard = styled(Card, {
    name: 'StyledCard',
    slot: 'Wrapper',
})`
    width: 100%;
    position: relative;
`;

export const StyledCardContent = styled(CardContent, {
    name: 'StyledCardContent',
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    text-transform: uppercase;
`;

export const StyledTypography = styled(Typography, {
    name: 'StyledButton',
})`
    font-size: 13px;
    font-weight: 600;
    color: #000;
    line-height: 18px;
    text-align: left;
`;
