import { useTheme, Button } from '@mui/material';
import { tokens } from "../theme";

export default function BlueButton(text: string | null) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    <>
        <Button sx={{ textTransform: 'none', fontSize: 15, borderRadius: 1.5, bgcolor: colors.blueAccent[800], color: colors.primary[100], fontWeight: 600 }}>
            {text}
        </Button>
    </>
}