import style from "../Resultados/Resultados.module.css";
import resultado1 from "../../assets/resultado1.jpeg";
import resultado2 from "../../assets/resultado2.jpeg";

function Resultados() {
  return (
    <section className={style.container}>
      <h1>Resultados</h1>
      <section className={style.boxRight}>
        <div className={style.descRight}>
          <h2>Volume Light Express</h2>
          <p>
            <span>Transformação Natural e Elegante</span> - Volume sutil para
            realçar a beleza natural do olhar.
          </p>
          <p>
            <span>Efeito Leve e Confortável</span> – Cílios ultrafinos que não
            pesam nos fios naturais.
          </p>
          <p>
            <span>Conforto</span> – Aplicação delicada, sem irritação ou
            desconforto.
          </p>
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
          <p>
            <span>Volume Intenso e Sofisticado</span> - Efeito tridimensional
            para um olhar marcante.
          </p>
          <p>
            <span>Praticidade</span> – Ideal para quem deseja acordar todos os
            dias com cílios perfeitos.
          </p>
          <p>
            <span>Leveza e Impacto</span> – Fios finos aplicados em leques,
            garantindo um visual expressivo sem pesar.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Resultados;
