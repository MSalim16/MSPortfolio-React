import "../ImgSlider/ImgSlider.css";

import HTML from "../../images/html.png";
import CSS from "../../images/css.png";
import JAVASCRIPT from "../../images/javascript.png";
import REACT from "../../images/react.png";
import NODE from "../../images/node.png";
import FireBase from "../../images/firebase.png";
import Postgresql from "../../images/postgresql.png";
import Mongo from "../../images/mongo.png";
import TypeScript from "../../images/typescript.png";
import JEST from "../../images/jest.png";
import EXPRESS from "../../images/express.png";
import TDD from "../../images/tdd.png";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const twitimages = [
  {
    project: "Blue Bird Reviews",
    label: "Login page with create account / reset password features",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/Twit1.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Landing page with pantry and waste",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/Twit2.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Pantry page with the option for barcode scanner",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit3.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Waste page with all the wasted food",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit4.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Waste page with all the wasted food",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit5.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Waste page with all the wasted food",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit6.jpg?raw=true",
  },
];

function TwitSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = twitimages.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className="slideshowBorder">
      <div className="slideshowContents">
        <Box
          sx={{
            maxHeight: 500,
            maxWidth: 225,
            flexGrow: 1,
            marginLeft: "2rem",
            borderRadius: "2rem",
          }}
        >
          <Typography
            style={{
              color: "#1b6bff",
              fontFamily: "PaulGrotesk",
              fontSize: "26px",
            }}
          >
            {twitimages[activeStep].project}
          </Typography>

          <p className="fuuddesc">
            Collaborated on a meal planning app with barcode scanning and recipe
            suggestions, showcasing skills in mobile dev, DB management, and UX.
            Contributed to success through teamwork, resulting in a
            comprehensive and useful app.
          </p>

          <p className="skillsused">Tech Stack</p>
          <div className="projectskills">
            <div className="projectskills-container">
              <div className="boxes">
                <img className="skillimg" src={CSS} alt="CSS icon" />
                <p className="skillname">CSS</p>
              </div>

              <div className="boxes">
                <img className="skillimg" src={EXPRESS} alt="FIREBASE icon" />
                <p className="skillname">EXPRESS</p>
              </div>
              <div className="boxes">
                <img
                  className="skillimg"
                  src={Postgresql}
                  alt="FIREBASE icon"
                />
                <p className="skillname">POSTGRESQL</p>
              </div>

              <div className="boxes">
                <img
                  className="skillimg"
                  src={JAVASCRIPT}
                  alt="TYPESCRIPT icon"
                />
                <p className="skillname">JAVASCRIPT</p>
              </div>

              <div className="boxes">
                <img className="skillimg" src={REACT} alt="REACT NATIVE icon" />
                <p className="reactnativeskill">REACT </p>
              </div>
              <div className="boxes">
                <img className="skillimg" src={NODE} alt="REACT NATIVE icon" />
                <p className="reactnativeskill">NODE </p>
              </div>
            </div>
          </div>

          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {twitimages.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 500,
                      display: "block",
                      maxWidth: 225,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Typography
            style={{
              color: "#1b6bff",
              fontFamily: "PaulGrotesk",
              marginTop: "1rem",
              fontSize: "10px",
            }}
          >
            {twitimages[activeStep].label}
          </Typography>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
          <div className="Buttons">
            <a
              target="blank"
              href="https://github.com/MSalim16/ms-bluebirdreviews-frontend"
            >
              <button className="GitHubLink"> GITHUB </button>
            </a>
            <a target="blank" href="https://msbluebirdreviews.netlify.app/">
              <button className="HostedLink"> Hosted Link </button>
            </a>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default TwitSlider;
