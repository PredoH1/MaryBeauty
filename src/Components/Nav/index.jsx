import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../Components/Nav/Nav.module.css";
import iconNav from "../../assets/iconNav.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav({ sobreRef, catalogRef, enderecoRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleScroll(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  }

  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Link to="/">
          <h1>MB</h1>
        </Link>
        <Link to="/">
          <img src={iconNav} alt="Logo" />
        </Link>
      </div>

      {/* Ícone de Menu Hambúrguer */}
      <button className={style.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu de Links */}
      <div className={`${style.links} ${menuOpen ? style.active : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <button>Home</button>
        </Link>
        <a onClick={() => handleScroll(sobreRef)}>
          <button>Sobre</button>
        </a>
        <a onClick={() => handleScroll(catalogRef)}>
          <button>Catálogo</button>
        </a>
        <a onClick={() => handleScroll(enderecoRef)}>
          <button>Endereço</button>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
