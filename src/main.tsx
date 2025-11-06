import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { CsvDataProvider } from './context/CsvDataContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CsvDataProvider>
      <BrowserRouter>
        <App />
      </ BrowserRouter>
    </CsvDataProvider>
  </StrictMode>,
)
