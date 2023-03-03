//import de react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import de las pages
import Home from "./pages/Home";
import Pokemones from "./pages/Pokemones";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
