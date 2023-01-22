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
            <div className="external-links">
              <a
                class="github"
                href="https://github.com/MSalim16"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                Github
              </a>

              <a
                class="LinkedIn"
                href="https://www.linkedin.com/in/mohamed-salim-23741a247/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
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
