import "../ImgSlider/ImgSlider.css";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    project: "Fuud.",
    label: "Login page with create account / reset password features",
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
    label: "Pantry page with the option for barcode scanner",
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

function ImgSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
              fontSize: "40px",
            }}
          >
            {images[activeStep].project}
          </Typography>

          <p className="fuuddesc">
            Collaborated in developing a meal planning app with barcode scanning
            and recipe suggestion features. Contributed to the project's success
            through effective teamwork and honed skills in mobile development,
            database management, and user experience.
          </p>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
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
              fontSize: "15px",
            }}
          >
            {images[activeStep].label}
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
        </Box>
      </div>
    </div>
  );
}

export default ImgSlider;
