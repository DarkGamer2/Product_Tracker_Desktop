import Home from "./pages/Home";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
    <ThemeProvider>
    <Home />
    </ThemeProvider>
    </>
  );
}

export default App;
