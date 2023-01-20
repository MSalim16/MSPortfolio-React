import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import "../Navbar/navbar.css";

const NavBar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu_hidden");
  const [isMenuClicked, setisMenuClicked] = useState(false);

  // toggle burger menu change

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setisMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}>{/* <Link to="/">Home</Link> */}</div>
          <div className={burger_class}>{/* <Link to="CV">CV</Link> */}</div>
          <div className={burger_class}>
            {/* <Link to="Projects">Projects</Link> */}
          </div>
        </div>
      </nav>

      <div className={menu_class}></div>
    </div>
  );
};

export default NavBar;
