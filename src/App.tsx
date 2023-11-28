import './App.css';
import { ThemeProvider } from "@mui/material";
import OverridedThemes from './mui-themes/ThemeOverrides';
import ComingSoon from './pages/coming-soon/ComingSoon';


function App() {
  return (
    <ThemeProvider theme={OverridedThemes}>
      <ComingSoon />
    </ThemeProvider>
  );
}

export default App;
