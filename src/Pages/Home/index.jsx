import Header from "../../Components/Header/index";
import Sobre from "../../Components/Sobre";
import React, { useRef } from "react";
import Nav from "../../Components/Nav";
import Catalogo from "../../Components/Catalogo";

function Home() {
  const sobreRef = useRef(null);

  return (
    <div>
      <Nav sobreRef={sobreRef} />
      <Header />
      <Sobre ref={sobreRef} />
      <Catalogo />
    </div>
  );
}

export default Home;
