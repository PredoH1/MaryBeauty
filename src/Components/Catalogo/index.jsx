import style from "../../Components/Catalogo/Catalogo.module.css";
import React, { useEffect, useRef, forwardRef } from "react";

function Catalogo(props, ref) {
  return (
    <section ref={ref} className={style.container}>
      <div className={style.titleCatalogo}>
        <h2>Conheca nosso catalogo</h2>
      </div>
      <div className={style.boxCatalogo}>
        <div className={style.service}>
          <h1>Cilios 1</h1>
        </div>

        <div className={style.service}>
          <h1>Cilios 2</h1>
        </div>

        <div className={style.service}>
          <h1>Cilios 3</h1>
        </div>

        <div className={style.service}>
          <h1>Cilios 3</h1>
        </div>

        <div className={style.service}>
          <h1>Cilios 3</h1>
        </div>

        <div className={style.service}>
          <h1>Cilios 3</h1>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Catalogo);
