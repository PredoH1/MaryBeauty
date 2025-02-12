import style from "../Resultados/Resultados.module.css";
import resultado1 from "../../assets/resultado1.jpeg";
import resultado2 from "../../assets/resultado2.jpeg";

function Resultados() {
  return (
    <section className={style.container}>
      <h1>Resultados e Depoimentos</h1>
      <section className={style.boxRight}>
        <div className={style.descRight}>
          <h2>Volume Light Express</h2>
        </div>
        <div className={style.imgRight}>
          <img src={resultado1} alt="" />
        </div>
      </section>
      <section className={style.boxLeft}>
        <div className={style.imgLeft}>
          <img src={resultado2} alt="" />
        </div>
        <div className={style.descLeft}>
          <h2>Foz 3d Express</h2>
        </div>
      </section>
    </section>
  );
}

export default Resultados;
