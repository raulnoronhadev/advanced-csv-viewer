import { Box, Container, Typography, useTheme } from '@mui/material';
import { tokens } from "../../context/ThemeContext";
import Topbar from '../../layout/Topbar';
import FileUploader from './FileUploader';

export default function Home() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container maxWidth="lg" sx={{ height: '100vh' }}>
            <Topbar />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90%',
                    flexDirection: 'column',
                    gap: 3,
                }}
            >
                <Typography variant='h1'
                    sx={{
                        fontSize: '48px', fontWeight: '1000', color: colors.grey[200]
                    }}>
                    Free Online CSV Viewer
                </Typography>
                <Typography variant='h4'
                    sx={{
                        color: colors.grey[300],
                        fontWeight: '600',
                        mb: 2
                    }}
                >
                    Upload and View CSV Files Online 100% Free
                </Typography>
                <FileUploader />
            </Box>
        </ Container >
    )
}