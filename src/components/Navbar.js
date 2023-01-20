import { Outlet, NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-style">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="CV">CV</Link>
          <Link to="Projects">Projects</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
