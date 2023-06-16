import "../ImgSlider/ImgSlider.css";

import CSS from "../../images/css.png";
import REACT from "../../images/react.png";
import FireBase from "../../images/firebase.png";
import TypeScript from "../../images/typescript.png";
import JEST from "../../images/jest.png";

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

const fuudimages = [
  {
    project: "Fuud.",
    label: "Login page with create / forgot password",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/fuud1.png?raw=true",
  },
  {
    project: "Fuud.",
    label: "Landing page with pantry and waste",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/fuud2.png?raw=true",
  },
  {
    project: "Fuud.",
    label: "Pantry page with barcode scanner",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/fuud3.png?raw=true",
  },
  {
    project: "Fuud.",
    label: "Waste page with all the wasted food",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/fuud4.png?raw=true",
  },
];

function FuudSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = fuudimages.length;

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
            {fuudimages[activeStep].project}
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
                <img className="skillimg" src={FireBase} alt="FIREBASE icon" />
                <p className="skillname">FIREBASE</p>
              </div>

              <div className="boxes">
                <img
                  className="skillimg"
                  src={TypeScript}
                  alt="TYPESCRIPT icon"
                />
                <p className="skillname">TYPESCRIPT</p>
              </div>
              <div className="boxes">
                <img className="skillimg" src={JEST} alt="JEST icon" />
                <p className="skillname">JEST</p>
              </div>

              <div className="boxes">
                <img className="skillimg" src={REACT} alt="REACT NATIVE icon" />
                <p className="reactnativeskill">REACT NATIVE</p>
              </div>
            </div>
          </div>

          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {fuudimages.map((step, index) => (
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
              fontSize: "11px",
            }}
          >
            {fuudimages[activeStep].label}
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
            <a target="blank" href="https://github.com/MSalim16/fuud">
              <button className="GitHubLink"> GITHUB </button>
            </a>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default FuudSlider;
