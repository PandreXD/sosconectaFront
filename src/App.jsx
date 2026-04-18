import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ajudar from "./pages/Ajudar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajudar" element={<Ajudar />} />
      </Routes>
    </BrowserRouter>
  );
}