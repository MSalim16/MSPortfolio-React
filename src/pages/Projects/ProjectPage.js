import React from "react";
import ImgSlider from "../../components/ImgSlider/FuudSlider";
import TwitSlider from "../../components/ImgSlider/TwitSlider";
import NoughtsSlider from "../../components/ImgSlider/NoughtsSlider";
import Footer from "../../components/Footer/Footer";

import "../Projects/projects.css";

const ProjectPage = () => {
  return (
    <>
      <div className="project-page" style={{ color: "black" }}>
        <section>
          <ImgSlider />
          <TwitSlider />
          <NoughtsSlider />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default ProjectPage;
