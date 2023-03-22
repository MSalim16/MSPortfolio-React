import HTML from "../../images/html.png";
import CSS from "../../images/css.png";
import JAVASCRIPT from "../../images/javascript.png";
import REACT from "../../images/react.png";
import Node from "../../images/node.png";
import FireBase from "../../images/firebase.png";
import GitHub from "../../images/github.png";
import Postgresql from "../../images/postgresql.png";
import Mongo from "../../images/mongo.png";
import TypeScript from "../../images/typescript.png";
import JEST from "../../images/jest.png";
import EXPRESS from "../../images/express.png";
import VSCODE from "../../images/vscode.png";
import AGILE from "../../images/agile.png";
import TDD from "../../images/tdd.png";

import Footer from "../../components/Footer/Footer";

import { useEffect, useRef } from "react";

import "../Home/home.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Lottie from "lottie-web";

const myface =
  "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/pfp.png?raw=true";

function HomePage() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/private_files/lf30_obidsi0t.json",
    });
    return () => animation.destroy();
  }, [ref]);

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
              <img className="htimg" src={AGILE} alt="Agile icon" />
              <p className="ht">Agile Methodologies</p>
            </div>
            <div className="box">
              <img className="htimg" src={TDD} alt="TDD icon" />
              <p className="ht">TDD</p>
            </div>
          </div>
        </div>
      </section>
      <section className="three">
        <div className="about-container">
          <h1 className="aboutme">About Me</h1>
          <p className="about">
            Welcome to my portfolio! As a proud graduate of Northcoders in
            Manchester, I have pursued a comprehensive education in software
            development. My 14-week intensive bootcamp allowed me to hone my
            skills in various programming languages such as
            JavaScript/TypeScript, HTML, and CSS. Additionally, I gained a solid
            understanding of back-end development principles including
            Test-Driven Development, Pair Programming, and MVC principles.
            <br></br> <br></br> I have also honed my skills in database
            management, working with PostgreSQL, MongoDB, and learning about
            database seeding, testing, and deployment. Additionally, I have
            learned front-end principles such as ReactJS, the Document Object
            Model, app design and planning, optimistic rendering, and hosting.
            <br></br> <br></br>
            In addition to my coursework, I have demonstrated my abilities
            through several practical projects. These include a group project,
            where we developed a phone application utilizing FireBase,
            TypeScript and React Native, as well as a full-stack solo project,
            which consisted of a backend JavaScript API and a React/CSS
            frontend. Furthermore, I have also developed a noughts and crosses
            game utilizing vanilla JavaScript, CSS, and HTML. Through these
            projects, I was able to apply network error in class to real-world
            scenarios and develop my skills in a professional manner.<br></br>{" "}
            <br></br> As a Northcoders graduate, I have also gained knowledge
            about DevOps, including continuous deployment, continuous
            integration, and workflows with GitHub. With a passion for creating
            innovative and efficient software solutions, I am always seeking to
            expand my skills and knowledge in the field of software development.
            <br></br> <br></br>I am excited to showcase my portfolio and
            highlight my projects, skills, and achievements. Thank you for
            visiting my website and taking the time to learn more about my
            journey as a software developer.
          </p>
          <div className="animated">
            <div ref={ref} alt="developer" />
          </div>
        </div>
      </section>

      <section className="four">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
