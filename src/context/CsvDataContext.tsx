import { createContext, useContext, useState, type ReactNode, type ChangeEvent } from "react";
import * as Papa from 'papaparse';


interface CsvData {
    id: string;
    name: string;
}

export interface CsvDataContextType {
    data: CsvData[];
    uploadCsv: (file: File) => void;
}

const CsvDataContext = createContext<CsvDataContextType | undefined>(undefined);

export const CsvDataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<CsvData[]>([]);

    const uploadCsv = (file: File) => {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setData(results.data as CsvData[]);
                console.log(results.data);
            },
            error: (error) => {
                console.error("Error parsing CSV: " + { error })
            }
        })
    }

    return (
        <CsvDataContext.Provider value={{ data, uploadCsv }}>
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