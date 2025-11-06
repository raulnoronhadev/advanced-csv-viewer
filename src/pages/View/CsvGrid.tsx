import { Box, Container, useTheme } from '@mui/material';
import Topbar from '../../layout/Topbar';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { useCsvData, type CsvRowData } from '../../context/CsvDataContext';
import { tokens } from "../../context/ThemeContext";
import { colorSchemeDark } from 'ag-grid-community';

export default function CsvGrid() {
    ModuleRegistry.registerModules([AllCommunityModule]);
    const { data, columnDefs } = useCsvData();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const myTheme = themeQuartz
        .withPart(colorSchemeDark)
        .withParams({
            backgroundColor: colors.grey[700],
            accentColor: 'dark',
        });

    return (
        <Container maxWidth="lg">
            <Topbar />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 3,
                }}
            >
                <Box sx={{
                    height: '85vh',
                    width: '96%',
                    bgcolor: colors.grey[800],
                }}>
                    <AgGridReact<CsvRowData>
                        theme={myTheme}
                        rowData={data}
                        columnDefs={columnDefs}

                    />
                </Box>
            </Box>
        </Container>
    )
}