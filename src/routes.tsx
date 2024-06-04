// MainRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Play from "./Components/Play";
import Game from "./Components/Game";
import Header from './Components/Header';

function MainRoutes() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/play" element={<Play />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        
    </Router>
  );
}

export default MainRoutes;
