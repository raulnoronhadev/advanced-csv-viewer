import { createContext, useContext, useState, type ReactNode, type ChangeEvent } from "react";
import * as Papa from 'papaparse';
import { type ColDef } from 'ag-grid-community';


export interface CsvRowData {
    [key: string]: any;
}

export interface CsvDataContextType {
    data: CsvRowData[];
    columnDefs: ColDef<CsvRowData>[];
    uploadCsv: (file: File) => void;
}

const CsvDataContext = createContext<CsvDataContextType | undefined>(undefined);

export const CsvDataProvider = ({ children }: { children: ReactNode }) => {
    const [columnDefs, setColumnDefs] = useState<ColDef<CsvRowData>[]>([]);
    const [data, setData] = useState<CsvRowData[]>([]);

    const uploadCsv = (file: File) => {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (results) => {
                const parsedData = results.data as CsvRowData[];
                if (parsedData.length > 0) {
                    const headers = Object.keys(parsedData[0]);
                    const dynamicColDefs: ColDef<CsvRowData>[] = headers.map(header => ({
                        field: header,
                        headerName: header.charAt(0).toUpperCase() + header.slice(1),
                        filter: true,
                    }));
                    setColumnDefs(dynamicColDefs);
                } else {
                    setColumnDefs([]);
                }
                setData(parsedData);
            },
            error: (error) => {
                console.error("Error parsing CSV: " + { error })
            }
        })
    }

    return (
        <CsvDataContext.Provider value={{ data, columnDefs, uploadCsv }}>
            {children}
        </CsvDataContext.Provider>
    )
}

export const useCsvData = () => {
    const context = useContext(CsvDataContext);
    if (context === undefined) {
        throw new Error('useCsvData must be used within a CsvDataProvider');
    }
    return context;
}