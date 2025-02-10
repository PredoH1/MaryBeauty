import Header from "../../Components/Header/index";
import Sobre from "../../Components/Sobre";
import React, { useRef } from "react";
import Nav from "../../Components/Nav";
import Catalogo from "../../Components/Catalogo";

function Home() {
  const sobreRef = useRef(null);
  const catalogRef = useRef(null);

  return (
    <div>
      <Nav sobreRef={sobreRef} catalogRef={catalogRef} />
      <Header />
      <Sobre ref={sobreRef} />
      <Catalogo ref={catalogRef} />
    </div>
  );
}

export default Home;
