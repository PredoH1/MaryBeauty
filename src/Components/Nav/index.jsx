import { Link } from "react-router-dom";
import style from "../../Components/Nav/Nav.module.css";
import iconNav from "../../assets/iconNav.png";

function Nav({ sobreRef }) {
  function handleScroll() {
    if (sobreRef.current) {
      sobreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav>
      <div className={style.logo}>
        <Link to="/">
          <h1>MB</h1>
        </Link>
        <Link to="/">
          <img src={iconNav} alt="" />
        </Link>
      </div>

      <div className={style.links}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <a>
          <button onClick={handleScroll}>Sobre</button>
        </a>
        <a href="#">
          <button>Catalogo</button>
        </a>
        <Link to="/endereco">
          <button>Endereço</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
