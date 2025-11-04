import { Box, Container, Typography } from '@mui/material';
import { tokens } from "../../theme";
import Topbar from '../../layout/Topbar';

export default function Home() {
    return (
        <Container maxWidth="lg" sx={{ height: '100vh' }}>
            <Topbar />
        </ Container>
    )
}