import { Link } from "react-router-dom";
import Header from "../../Components/Header/index";
import Sobre from "../../Components/Sobre";
import React, { useRef } from "react";
import Nav from "../../Components/Nav";

function Home() {
  const sobreRef = useRef(null);

  return (
    <div>
      <Nav sobreRef={sobreRef} />
      <Header />
      <Sobre ref={sobreRef} />
    </div>
  );
}

export default Home;
