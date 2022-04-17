import React from 'react';
import Typography from '@mui/material/Typography';
import { StyledBox } from './styles';

export interface MessageBoxProps {
    text: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ text }) => (
    <StyledBox>
        <Typography variant="h5">{text}</Typography>
    </StyledBox>
);

export default MessageBox;
