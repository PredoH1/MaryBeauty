import Header from "../../Components/Header/index";
import Sobre from "../../Components/Sobre";
import React, { useRef } from "react";
import Nav from "../../Components/Nav";
import Catalogo from "../../Components/Catalogo";
import Resultados from "../../Components/Resultados";
import Endereco from "../../Components/Endereco";
import Footer from "../../Components/Footer/Index";

function Home() {
  const sobreRef = useRef(null);
  const catalogRef = useRef(null);
  const enderecoRef = useRef(null);

  return (
    <div>
      <Nav
        sobreRef={sobreRef}
        catalogRef={catalogRef}
        enderecoRef={enderecoRef}
      />
      <Header />
      <Sobre ref={sobreRef} />
      <Catalogo ref={catalogRef} />
      <Endereco ref={enderecoRef} />
      <Resultados />
      <Footer
        sobreRef={sobreRef}
        catalogRef={catalogRef}
        enderecoRef={enderecoRef}
      />
    </div>
  );
}

export default Home;
