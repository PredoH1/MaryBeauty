import style from "../../Components/Catalogo/Catalogo.module.css";
import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import catClassico from "../../assets/catClassico.jpg";
import catEfeitoRimel from "../../assets/catEfeitoRimel.jpg";
import catFoxBrasileiro from "../../assets/catFoxBrasileiro.jpg";
import catFox4d from "../../assets/catFox4d.jpg";
import catVolumeBrasileiro from "../../assets/catVolumeBrasileiro.jpg";
import catVolume3d from "../../assets/catVolume3d.jpg";
import catVolume4d from "../../assets/catVolume4d.jpg";
import catVolume5d from "../../assets/catVolume5d.jpg";
import catVolume6d from "../../assets/catVolume6d.jpg";
import catEfeitoMolhado from "../../assets/catEfeitoMolhado.jpg";
import iconCatalogo from "../../assets/iconCatalogo.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import iconFaleConosco from "../../assets/iconFaleConosco.png";

function Catalogo(props, ref) {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { x: -700 }, // Começa deslocado para a esquerda
      { x: 0, duration: 2.7, ease: "power3.out" } // Move suavemente para a posição original
    );
  }, []);

  return (
    <section ref={ref} className={style.container}>
      <div className={style.titleCatalogo}>
        <h2 ref={titleRef}>Conheca nosso catalogo</h2>
      </div>
      <div className={style.boxCatalogo}>
        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Clássico</h1>
          </div>

          <img className={style.imgCat} src={catClassico} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Efeito Rímel</h1>
          </div>

          <img className={style.imgCat} src={catEfeitoRimel} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Fox Brasileiro</h1>
          </div>

          <img className={style.imgCat} src={catFoxBrasileiro} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Fox 4D</h1>
          </div>
          <img className={style.imgCat} src={catFox4d} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Volume Brasileiro</h1>
          </div>

          <img className={style.imgCat} src={catVolumeBrasileiro} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Volume 3D</h1>
          </div>

          <img className={style.imgCat} src={catVolume3d} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Volume 4D</h1>
          </div>

          <img className={style.imgCat} src={catVolume4d} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Volume 5D</h1>
          </div>

          <img className={style.imgCat} src={catVolume5d} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Volume 6D</h1>
          </div>

          <img className={style.imgCat} src={catVolume6d} alt="" />
        </div>

        <div className={style.service}>
          <div className={style.descCat}>
            <img src={iconCatalogo} alt="" />
            <h1>Efeito Molhado</h1>
          </div>

          <img className={style.imgCat} src={catEfeitoMolhado} alt="" />
        </div>
      </div>
      <div className={style.socialMedia}>
        <div className={style.boxImg}>
          <img src={iconFaleConosco} alt="" />
        </div>
        <div className={style.infoFaleConosco}>
          <h3>Gostou de algum dos nossos serviços?</h3>
          <h3>
            Não perca tempo! Entre em contato agora mesmo e tire todas as suas
            dúvidas.
          </h3>
          <div>
            <a
              href="https://www.instagram.com/marybeauty_25?igsh=MWQwYmIwZW81ZWR5cA=="
              target="_blank"
            >
              <button className={style.instagramButton}>
                <p>Nosso Instagram</p>

                <img src={instagram} alt="" />
              </button>
            </a>

            <a href="https://wa.me/5562993513317" target="_blank">
              <button className={style.whatsappButton}>
                <p>Nosso WhatsApp</p>

                <img src={whatsapp} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Catalogo);
