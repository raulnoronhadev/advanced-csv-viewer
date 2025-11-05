import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import Topbar from '../../layout/Topbar';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, type ColDef } from 'ag-grid-community';

export default function View() {
    ModuleRegistry.registerModules([AllCommunityModule]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    interface MyRowData {
        id: number;
        name: string;
        age: number;
    }

    const columnDefs: ColDef<MyRowData>[] = [
        { field: 'id' },
        { field: 'name' },
        { field: 'age' },

    ];

    const rowData: MyRowData[] = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
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
                    width: '96%'
                }}>
                    <AgGridReact<MyRowData>
                        rowData={rowData}
                        columnDefs={columnDefs}
                    />
                </Box>
            </Box>
        </Container>
    )
}