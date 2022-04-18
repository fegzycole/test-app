import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

export const StyledTextField = styled(TextField, {
    name: 'StyledTextField',
    slot: 'Wrapper',
})`
    .MuiOutlinedInput-input {
        padding: 9px 10px;
        border-radius: 0px;
    }

    border-radius: 0px;
    width: 250px;
    color: #28282b;
`;

export const StyledBox = styled(Box, {
    name: 'StyledBox',
    slot: 'Wrapper',
})`
    width: 300px;
    margin: 0 auto;
`;

export const StyledIconButton = styled(IconButton, {
    name: 'StyledButton',
})`
    background-color: #28282b;
    border-radius: 2px;
    margin-left: 10px;
    &:hover {
        background-color: #28282b;
    }
    &.Mui-disabled {
        background: #ccc;
    }
`;

export const StyledSearchIcon = styled(SearchIcon, {
    name: 'StyledSearchIcon',
})`
    color: #fff;
`;
