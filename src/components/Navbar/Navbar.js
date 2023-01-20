import { Outlet, NavLink } from "react-router-dom";
import "../Navbar/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-style">
      <header>
        <nav class="nav-bar">
          <div>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="active" to="CV">
              CV
            </NavLink>
            <NavLink exact activeClassName="active" to="Projects">
              Projects
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
