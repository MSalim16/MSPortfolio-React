import HTML from "../../tech/html.png";
import CSS from "../../tech/css.png";
import JAVASCRIPT from "../../tech/javascript.png";
import REACT from "../../tech/react.png";
import Node from "../../tech/node.png";
import FireBase from "../../tech/firebase.png";
import GitHub from "../../tech/github.png";
import Postgresql from "../../tech/postgresql.png";
import Mongo from "../../tech/mongo.png";
import TypeScript from "../../tech/typescript.png";
import JEST from "../../tech/jest.png";
import EXPRESS from "../../tech/express.png";
import VSCODE from "../../tech/vscode.png";
import PHOTOSHOP from "../../tech/photoshop.png";

import { useEffect } from "react";

import "../Home/home.css";

import AOS from "aos";
import "aos/dist/aos.css";

const myface =
  "https://raw.githubusercontent.com/MSalim16/MSPortfolio-React/main/src/images/MSALIMPICTURE%20WORK.jpeg";

function HomePage() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="wrapper">
      <section className="one">
        <div className="Home-Page">
          <div class="landingcoloumn">
            <h1 class="fullstack">
              Full Stack <br></br>
              Developer<span class="fullstop">.</span>
            </h1>
            <p class="subheading">
              I like to craft solid and scalable full stack products with great
              <br></br> user experiences.
            </p>
          </div>
          <img class="landingpfp" src={myface}></img>
        </div>
      </section>

      <section className="two">
        <div className="skills">
          <div>
            <p className="skills-header">Skills</p>
            <p className="skills-p">
              These are the technologies I've worked with
            </p>
          </div>
          <div className="skills-container">
            <div className="box">
              <img className="htimg" src={HTML} alt="HTML icon" />
              <p className="ht">HTML</p>
            </div>

            <div className="box">
              <img className="htimg" src={CSS} alt="CSS icon" />
              <p className="ht">CSS</p>
            </div>

            <div className="box">
              <img className="htimg" src={JAVASCRIPT} alt="JAVASCRIPT icon" />
              <p className="ht">JAVASCRIPT</p>
            </div>

            <div className="box">
              <img className="htimg" src={REACT} alt="REACT icon" />
              <p className="ht">REACT</p>
            </div>

            <div className="box">
              <img className="ggithub" src={GitHub} alt="GITHUB icon" />
              <p className="ht">GITHUB</p>
            </div>

            <div className="box">
              <img className="htimg" src={Node} alt="NODE JS icon" />
              <p className="ht">NODE JS</p>
            </div>

            <div className="box">
              <img className="htimg" src={Mongo} alt="MONGO DB icon" />
              <p className="ht">MONGO DB</p>
            </div>

            <div className="box">
              <img className="htimg" src={FireBase} alt="FIREBASE icon" />
              <p className="ht">FIREBASE</p>
            </div>

            <div className="box">
              <img className="htimg" src={Postgresql} alt="POSTGRESQL icon" />
              <p className="ht">POSTGRESQL</p>
            </div>

            <div className="box">
              <img className="htimg" src={TypeScript} alt="TYPESCRIPT icon" />
              <p className="ht">TYPESCRIPT</p>
            </div>
            <div className="box">
              <img className="htimg" src={JEST} alt="JEST icon" />
              <p className="ht">JEST</p>
            </div>
            <div className="box">
              <img className="htimg" src={EXPRESS} alt="EXPRESS icon" />
              <p className="ht">EXPRESS JS</p>
            </div>
            <div className="box">
              <img className="htimg" src={REACT} alt="REACT NATIVE icon" />
              <p className="ht">REACT NATIVE</p>
            </div>
            <div className="box">
              <img className="htimg" src={VSCODE} alt="VSCODE icon" />
              <p className="ht">VS CODE</p>
            </div>
            <div className="box">
              <img className="htimg" src={PHOTOSHOP} alt="PHOTOSHOP icon" />
              <p className="ht">PHOTOSHOP</p>
            </div>
          </div>
        </div>
      </section>
      <section className="three">
        <h1>my Tech Stack</h1>
      </section>

      <section className="four">
        <h1>Footer</h1>
      </section>
    </div>
  );
}

export default HomePage;
