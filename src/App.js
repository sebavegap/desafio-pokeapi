//import de react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

//import de las pages
import Home from "./pages/Home";
import Pokemones from "./pages/Pokemones";

import CardR from "./pages/CardR";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:id" element={<CardR />} />
        </Routes>
    
      </BrowserRouter>

    </div>
  );
}

export default App;
