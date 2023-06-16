import "../ImgSlider/ImgSlider.css";

import CSS from "../../images/css.png";
import JAVASCRIPT from "../../images/javascript.png";
import REACT from "../../images/react.png";
import NODE from "../../images/node.png";
import Postgresql from "../../images/postgresql.png";
import EXPRESS from "../../images/express.png";

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

const twitImages = [
  {
    project: "Blue Bird Reviews",
    label: "Homepage displays reviews with sortable date order",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/Twit1.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Sortable reviews by votes, date, owner, and title",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/Twit2.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Login page with all users",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit3.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Sort reviews by the review category",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit4.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label:
      "Individual review page with the option to upvote or downvote a post",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit5.jpg?raw=true",
  },
  {
    project: "Blue Bird Reviews",
    label: "Option to comment on reivews and also delete comments",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/twit6.jpg?raw=true",
  },
];

function TwitSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = twitImages.length;

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
              fontSize: "23px",
            }}
          >
            {twitImages[activeStep].project}
          </Typography>

          <p className="fuuddesc">
            Developed a Render-hosted API as the sole developer, delivering
            game-related data (reviews, categories, comments, and users).
            Utilized Github, Kanban boards, MVC pattern, and TDD for efficient
            project management, structured development, and bug identification.
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
            {twitImages.map((step, index) => (
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
            {twitImages[activeStep].label}
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
