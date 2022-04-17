import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

export const StyledGrid = styled(Grid, {
    name: 'StyledGrid',
})`
    margin: 0 auto;
`;

export const Container = styled(Grid, {
    name: 'Container',
    slot: 'Wrapper',
})`
    width: 90%;
    margin: 40px auto;
    padding: 40px;
`;
