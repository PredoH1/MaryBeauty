import style from "../../Components/Header/Header.module.css";
import Nav from "../../Components/Nav/index";

function Header() {
  return (
    <div>
      <Nav />
      <h1 className={style.header}>Header</h1>
    </div>
  );
}

export default Header;
