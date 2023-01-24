import HTML from "../../tech/html.png";
import CSS from "../../tech/css.png";
import JavaScript from "../../tech/javascript.png";
import ReactImg from "../../tech/react.png";
import Node from "../../tech/node.png";
import FireBase from "../../tech/firebase.png";
import GitHub from "../../tech/github.png";
import Postgresql from "../../tech/postgresql.png";
import Mongo from "../../tech/mongo.png";

import { motion, useScroll } from "framer-motion";

import "../Home/home.css";

const myface =
  "https://raw.githubusercontent.com/MSalim16/MSPortfolio-React/main/src/images/MSALIMPICTURE%20WORK.jpeg";

function HomePage() {
  const { scrollYProgress } = useScroll();
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
        <motion.div className="skills" style={{ scaleX: scrollYProgress }}>
          {/* Container */}
          <div className="skills-container">
            <div>
              <p className="skills-header">Skills</p>
              <p className="py-4">
                // These are the technologies I've worked with
              </p>
            </div>

            <div className="skills-3">
              <div className="htmlimg">
                <img className="htimg" src={HTML} alt="HTML icon" />
                <p className="ht">HTML</p>
              </div>
            </div>
          </div>
        </motion.div>
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
