import style from "../../Components/Footer/Footer.module.css";
import iconNav from "../../assets/iconNav.png";
import { Link } from "react-router-dom";

function Footer({ sobreRef, catalogRef, enderecoRef }) {
  function handleScroll(ref) {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.logo}>
          <Link to="/" onClick={scrollToTop}>
            <h1>MB</h1>
          </Link>
          <Link to="/" onClick={scrollToTop}>
            <img src={iconNav} alt="Logo" />
          </Link>
        </div>

        <div className={style.links}>
          <a onClick={() => handleScroll(sobreRef)}>Sobre</a>
          <a onClick={() => handleScroll(catalogRef)}>Catálogo</a>
          <a onClick={() => handleScroll(enderecoRef)}>Endereço</a>
          <a href="https://wa.me/5562993513317" target="_blank">
            SAC - Serviço de Atendimento ao Cliente
          </a>
        </div>

        <button className={style.topButton} onClick={scrollToTop}>
          ↑
        </button>
      </div>

      <div className={style.copyright}>
        <p>Mary Beauty © 2025. Todos os direitos reservados.</p>
      </div>
    </section>
  );
}

export default Footer;
