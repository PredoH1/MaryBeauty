import style from "../../Components/Endereco/Endereco.module.css";
import imgLocalizacao from "../../assets/imgLocalizacao.png";
import React, { useEffect, useRef, forwardRef } from "react";

function Endereco(props, ref) {
  return (
    <section ref={ref} className={style.container}>
      <div className={style.boxInfoLoc}>
        <h3>
          Nosso time está pronto para te atender pessoalmente! Visite-nos!
        </h3>
        <p>R. 20, 172 - St. Central, Goiânia - GO, 74020-170</p>
        <img src={imgLocalizacao} alt="" />
      </div>
      <div className={style.boxLoc}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.87399648096456!2d-49.252503499999996!3d-16.677686899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef17c9f599a5d%3A0xe89ae76cf966f6f7!2sIvonete%20Cabeleireiros!5e0!3m2!1spt-BR!2sbr!4v1740168913431!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default forwardRef(Endereco);
