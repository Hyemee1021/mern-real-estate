import "./App.css";
import { Home } from "./pages/Home";
import { Listing } from "./pages/Listing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </Router>
  );
}

export default App;
