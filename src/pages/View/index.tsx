import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import Topbar from '../../layout/Topbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BlueButton from '../../components/BlueButton';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import { AllCommunityModule, ModuleRegistry, type ColDef } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

interface CarData {
    make: string;
    model: string;
    price: number;
}

export default function View() {
    const [rowData, setRowData] = useState<CarData[]>([
        { make: "Tesla", model: "Model Y", price: 64950 },
        { make: "Ford", model: "F-Series", price: 33850 },
        { make: "Toyota", model: "Corolla", price: 29600 },
    ]);

    const [colDefs, setColDefs] = useState<ColDef<CarData>[]>([
        { field: "make" },
        { field: "model" },
        { field: "price" },
    ]);

    return (
        <Container maxWidth="lg" sx={{
            height: '100%',
        }}>
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
                <Box sx={{ height: '100%', }}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                    />
                </Box>
            </Box>
        </Container>
    )
}