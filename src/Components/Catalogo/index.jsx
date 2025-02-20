import style from "../../Components/Catalogo/Catalogo.module.css";
import React, { useEffect, useRef, forwardRef } from "react";
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

function Catalogo(props, ref) {
  return (
    <section ref={ref} className={style.container}>
      <div className={style.titleCatalogo}>
        <h2>Conheca nosso catalogo</h2>
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
    </section>
  );
}

export default forwardRef(Catalogo);
