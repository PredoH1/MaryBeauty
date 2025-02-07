import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Endereco from "./Pages/Endereco/index";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/endereco" element={<Endereco />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
