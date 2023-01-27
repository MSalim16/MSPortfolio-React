import React from "react";
import "../Footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-container">
        <div className="contact">
          <h1 className="contactme">CONTACT ME</h1>
          <a href="mailto:mohamedsalim192002@gmail.com">
            <p> Email</p>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-salim-23741a247/"
            target="_blank"
            rel="noreferrer"
          >
            <p> LinkedIn</p>
          </a>
        </div>
        <h1 className="links"> QUICK LINKS </h1>
        <div className="footer-redirects">
          <a className="home-link" href="http://localhost:3000/">
            <p>Home</p>
          </a>
          <Link to="/CV">
            <p> My CV </p>
          </Link>
          <Link to="/Projects">
            <p> My Projects </p>
          </Link>
          <a
            href="https://github.com/MSalim16"
            target="_blank"
            rel="noreferrer"
          >
            <p>My GitHub</p>
          </a>
        </div>
        <div className="bottom-footer"></div>
        <h1 className="createdby">Created By Mohamed Salim 2023</h1>
      </div>
    </div>
  );
};

export default Footer;
