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
import TRELLO from "../../tech/trello.png";

import Footer from "../../components/footer";

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
              <img className="htimg" src={TRELLO} alt="TRELLO icon" />
              <p className="ht">TRELLO</p>
            </div>
          </div>
        </div>
      </section>
      <section className="three">
        <div className="about-container">
          <h1 className="aboutme">About Me</h1>
          <p className="about">
            As a results-driven software engineering professional with a passion
            for both building secure web and mobile applications as well as
            computer hardware, I am confident in my ability to contribute to a
            dynamic and high-performing team. My strong background in software
            engineering, coupled with my love for computer building and
            hardware, has equipped me with the skills necessary to tackle
            complex business problems and effectively communicate with senior
            management. I am excited about the opportunity to apply my skills
            and experience to a new software engineering role, where I can
            continue to grow and develop as a professional while indulging my
            passion for technology.
            <br></br>
            <br></br>
            As a current student at the Northcoders in Manchester, I am pursuing
            a comprehensive education in software development. Through a 14-week
            intensive bootcamp, I am honing my skills in various programming
            languages such as JavaScript/TypeScript, HTML, and CSS.
            Additionally, I am gaining a solid understanding of back-end
            development principles including Test-Driven Development, Pair
            Programming, and MVC principles. <br></br>
            <br></br>I am also honing my skills in database management, working
            with PostgreSQL, MongoDB, and learning about database seeding,
            testing, and deployment. Additionally, I am learning front-end
            principles such as ReactJS, the Document Object Model, app design
            and planning, optimistic rendering, and hosting. <br></br>
            <br></br>
            In addition to my coursework, I have also demonstrated my abilities
            through several practical projects. These include a group project,
            where we developed a phone application utilizing FireBase,
            TypeScript and React Native, as well as a full-stack solo project,
            which consisted of a backend JavaScript API and a React/CSS
            frontend. Furthermore, I have also developed a noughts and crosses
            game utilizing vanilla JavaScript, CSS, and HTML. Through these
            projects, I have been able to apply the concepts learned in class to
            real-world scenarios and have developed my skills in a professional
            manner. <br></br>
            <br></br>
            Furthermore, I am also learning about DevOps, including continuous
            deployment, continuous integration, and workflows with GitHub.
          </p>
        </div>
      </section>

      <section className="four">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
