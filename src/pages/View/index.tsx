import { Box, Container, useTheme } from '@mui/material';
import { tokens } from "../../context/ThemeContext";
import CsvGrid from './CsvGrid';

export default function View() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container maxWidth="lg">
            <CsvGrid />
        </Container>
    )
}