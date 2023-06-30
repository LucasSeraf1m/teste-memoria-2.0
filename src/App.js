import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home.component";
import ResponderTeste from "./Components/ResponderTeste.component";
import CriarTeste from "./Components/CriarTeste.component";
import Resultados from "./Components/Resultados.component";
import Login from "./Components/Login.component";
import Header from "./Components/Header.component";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responder" element={<ResponderTeste />} />
          <Route path="/criarTeste" element={<CriarTeste />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
