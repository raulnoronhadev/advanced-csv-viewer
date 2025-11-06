import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './context/ThemeContext';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import View from './pages/View';

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view" element={<View />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}