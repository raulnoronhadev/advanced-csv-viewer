import { Box, Typography, Button, useTheme } from '@mui/material';
import { tokens } from "../../context/ThemeContext";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useState, useRef, type ChangeEvent, type FormEvent, Activity } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCsvData } from '../../context/CsvDataContext';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FileUploader() {
    const [csvFileData, setCsvFileData] = useState<File | null>(null);
    const { uploadCsv } = useCsvData();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setCsvFileData(file);
            uploadCsv(file);
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (csvFileData) {
            console.log('Selected CSV file: ', csvFileData);
            navigate('/view');
        } else {
            alert('Please click in Upload Icon and select a CSV file');
        }
    }

    const handleIconClick = () => {
        fileInputRef.current?.click();
    }

    return (
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
            <Activity mode={!csvFileData ? "visible" : "hidden"}>
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
                            onClick={handleIconClick}
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
                            Upload file
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
            </Activity>
            <Activity mode={csvFileData ? "visible" : "hidden"}>
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <input
                            type="file"
                            accept=".csv"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <CheckCircleOutlineIcon
                            sx={{
                                fontSize: '10rem',
                                color: colors.greenAccent[500],
                            }}
                        />
                        <Typography
                            variant='h4'
                            sx={{
                                color: colors.grey[300],
                                fontWeight: '600'
                            }}>
                            Upload complete
                        </Typography>
                        <Typography
                            variant='h5'
                            sx={{
                                color: colors.grey[300],
                            }}>
                            {csvFileData?.name}
                        </Typography>
                        <Button
                            type={"submit"}
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
                            View Your CSV File
                            <ArrowForwardIcon sx={{ fontSize: 20, ml: 1 }} />
                        </Button>
                    </form>

                </Box>
            </Activity>
        </Box>
    )
}