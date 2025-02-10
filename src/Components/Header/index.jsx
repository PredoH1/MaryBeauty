import style from "../../Components/Header/Header.module.css";
import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

function Header() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  function abrirCertificado() {
    window.open("/Certificado.pdf", "_blank");
  }

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { x: -700 }, // Começa deslocado para a esquerda
      { x: 0, duration: 1.5, ease: "power3.out" } // Move suavemente para a posição original
    ),
      gsap.fromTo(
        paragraphRef.current, // Seleciona o <p>
        { x: -700, opacity: 0 }, // Vem da esquerda e invisível
        { x: 0, opacity: 1, duration: 3, ease: "power3.out" } // Chega mais rápido que o título
      );
  }, []);

  return (
    <section className={style.mainSection}>
      <section className={style.sectionInfo}>
        <div className={style.infoText}>
          <h2 ref={titleRef} className={style.titleText}>
            Cuidar de você é um investimento
          </h2>
          <p ref={paragraphRef} className={style.infoParagraph}>
            Ofereço extensão e cuidados com cílios, garantindo alongamentos
            naturais, volumosos e duradouros com precisão e qualidade
          </p>
          <button className={style.button} onClick={abrirCertificado}>
            Ver meu certificado
          </button>
        </div>
      </section>
    </section>
  );
}

export default Header;
