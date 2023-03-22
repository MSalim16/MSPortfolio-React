import React from "react";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import Footer from "../../components/Footer/Footer";

import "../Projects/projects.css";

const ProjectPage = () => {
  return (
    <>
      <div className="project-page" style={{ color: "black" }}>
        <section>
          <ImgSlider />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default ProjectPage;
