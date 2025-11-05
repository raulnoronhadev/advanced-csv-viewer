import { Box, Container, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from "../theme";
import BlueButton from '../components/BlueButton';

export default function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container
            maxWidth='lg'
            sx={{
                height: '76px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: colors.primary[100],
                    height: '100%',
                    width: '100%',
                }}
            >
                <Button sx={{ textTransform: 'none', fontSize: 16, color: colors.primary[100] }}>
                    CSV Viewer
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 4,
                    }}
                >
                    <Button sx={{ textTransform: 'none', fontSize: 16, color: colors.grey[200] }}>Features</Button>
                    <Button sx={{ textTransform: 'none', fontSize: 16, color: colors.grey[200] }}>Use Cases</Button>
                    <Button sx={{ textTransform: 'none', fontSize: 16, color: colors.grey[200] }}>Browser History</Button>
                    <Button sx={{ textTransform: 'none', fontSize: 16, color: colors.grey[200] }}>Download</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button sx={{ textTransform: 'none', fontSize: 15, color: colors.primary[100], fontWeight: 600 }}>
                        Log In
                    </Button>
                    <BlueButton text={'Sign Up'} />
                </Box>
            </Box>
        </Container >
    )
}