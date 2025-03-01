import style from "../../Components/Sobre/Sobre.module.css";
import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brushIcon from "../../assets/brushIcon.svg";
import diamondIcon from "../../assets/diamondIcon.svg";
import eyelashIcon from "../../assets/eyelashIcon.svg";

gsap.registerPlugin(ScrollTrigger);

function Sobre(props, ref) {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top top",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
          markers: false,
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section className={style.sectionSobre}>
      <div ref={ref} className={style.titleSobre}>
        <h1 ref={(el) => (cardsRef.current[0] = el)}>
          Entregamos mais do que apenas extensão de cílios
        </h1>
      </div>
      <section ref={ref} className={style.sectionCard}>
        <div ref={(el) => (cardsRef.current[1] = el)} className={style.cards}>
          <img src={brushIcon} alt="" />
          <h2>Personalização</h2>
          <p>
            Cada cliente recebe um design de cílios adaptado ao formato do rosto
            e ao estilo desejado.
          </p>
        </div>
        <div ref={(el) => (cardsRef.current[2] = el)} className={style.cards}>
          <img src={diamondIcon} alt="" />
          <h2>Qualidade e Durabilidade</h2>
          <p>
            Utilizamos materiais de alta qualidade para garantir fios leves,
            volumosos e de longa duração
          </p>
        </div>
        <div ref={(el) => (cardsRef.current[3] = el)} className={style.cards}>
          <img src={eyelashIcon} alt="" />
          <h2>Cuidados Especiais</h2>
          <p>
            Além da aplicação, é orientado sobre manutenção e saúde dos cílios,
            garantindo um visual sempre bonito
          </p>
        </div>
      </section>
    </section>
  );
}

export default forwardRef(Sobre);
