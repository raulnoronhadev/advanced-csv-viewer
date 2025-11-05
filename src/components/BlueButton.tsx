import { useTheme, Button, type SxProps } from '@mui/material';
import { tokens } from "../theme";

interface IBlueButtonProps {
    text: string,
    dynamicPadding?: number,
}

export default function BlueButton({ text, dynamicPadding }: IBlueButtonProps) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Button
            sx={{
                p: `${dynamicPadding}px`,
                paddingLeft: 2,
                paddingRight: 2.5,
                textTransform: 'none',
                fontSize: 15,
                borderRadius: 1.5,
                bgcolor: colors.blueAccent[800],
                color: colors.primary[100],
                fontWeight: 600,
            }}>
            {text}
        </Button>
    )
}