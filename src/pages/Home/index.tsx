import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import Topbar from '../../layout/Topbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BlueButton from '../../components/BlueButton';

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
                }}>
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
                <Box
                    sx={{
                        bgcolor: colors.grey[700],
                        height: '21.875rem',
                        width: '100%',
                        borderRadius: 4,
                        borderStyle: 'dashed',
                        borderColor: colors.grey[800],
                        borderWidth: 2,
                    }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            sx={{
                                bgcolor: colors.primary[900],
                                borderRadius: 3,
                                height: '6rem',
                                width: '6rem',
                                borderStyle: 'solid',
                                borderColor: colors.grey[800],
                                borderWidth: 2,
                            }}
                        >
                            <FileUploadIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </ Container >
    )
}