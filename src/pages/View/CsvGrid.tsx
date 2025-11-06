import { Box, Container } from '@mui/material';
import Topbar from '../../layout/Topbar';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, type ColDef } from 'ag-grid-community';
import { useCsvData, type CsvRowData } from '../../context/CsvDataContext';

export default function CsvGrid() {
    ModuleRegistry.registerModules([AllCommunityModule]);
    const { data, columnDefs } = useCsvData();
    console.log(data);

    const rowData: CsvRowData[] = [

    ];

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
                    className: "ag-theme-quartz-dark",
                }}>
                    <AgGridReact<CsvRowData>
                        rowData={data}
                        columnDefs={columnDefs}
                    />
                </Box>
            </Box>
        </Container>
    )
}