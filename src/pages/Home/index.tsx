import { Box, Container, Typography, Button, useTheme, FormControl } from '@mui/material';
import { tokens } from "../../theme";
import Topbar from '../../layout/Topbar';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import React, { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [selectedCsvFile, setSelectedCsvFile] = useState<File | null>(null);
    const [isFileSelected, setIsFileSelected] = useState<boolean>(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedCsvFile(e.target.files[0]);
            setIsFileSelected(true);
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (selectedCsvFile) {
            console.log('Selected CSV file: ', selectedCsvFile);
            navigate('/target-page');
        } else {
            alert('Please select a CSV file');
        }
    }

    const handleIconClick = () => {
        fileInputRef.current?.click();
    }

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
                            flexDirection: 'column',
                        }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <input
                                type="file"
                                accept=".csv"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                            <Button
                                onClick={handleIconClick}
                                sx={{
                                    bgcolor: colors.primary[900],
                                    borderRadius: 3,
                                    height: '6rem',
                                    width: '6rem',
                                    borderStyle: 'solid',
                                    borderColor: colors.grey[800],
                                    borderWidth: 2,
                                    mb: 3,
                                    '&:hover': {
                                        bgcolor: colors.grey[600],
                                    }
                                }}
                            >
                                <FileUploadOutlinedIcon sx={{ fontSize: 40, color: colors.primary[100] }} />
                            </Button>
                            <Button
                                type="submit"
                                onClick={isFileSelected ? undefined : handleIconClick}
                                sx={{
                                    p: 1.5,
                                    paddingLeft: 3,
                                    paddingRight: 3,
                                    textTransform: 'none',
                                    fontSize: 15,
                                    borderRadius: 1.5,
                                    bgcolor: colors.blueAccent[800],
                                    color: colors.primary[100],
                                    fontWeight: 600,
                                }}>
                                Select CSV file
                            </Button>
                        </form>
                        <Typography
                            sx={{
                                mt: 2,
                                color: colors.grey[300],
                                fontWeight: 700,
                            }}>
                            or, drop he file here
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ Container >
    )
}