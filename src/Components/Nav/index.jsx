import { Link } from "react-router-dom";
import style from "../../Components/Nav/Nav.module.css";
import iconNav from "../../assets/iconNav.png";

function Nav() {
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
        <Link to="/">Home</Link>
        <a href="#">Sobre</a>
        <a href="#">Catalogo</a>
        <Link to="/endereco">Endereco</Link>
      </div>
    </nav>
  );
}

export default Nav;
