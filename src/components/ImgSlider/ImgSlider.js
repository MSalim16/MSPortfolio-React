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
    label: "Login Page with Firebase Auth",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/fuud1.png?raw=true",
  },
  {
    project: "Fuud.",
    label: "Landing Page with Pantry and Waste",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/fuud2.png?raw=true",
  },
  {
    project: "Fuud.",
    label: "Bali, Indonesia",
    imgPath:
      "https://github.com/MSalim16/MSPortfolio-React/blob/main/src/images/fuud3.png?raw=true",
  },
  {
    project: "Fuud.",
    label: "Goč, Serbia",
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
    <Box
      sx={{ maxHeight: 500, maxWidth: 225, flexGrow: 1, marginLeft: "2rem" }}
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
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography
          style={{
            color: "#1b6bff",
            fontFamily: "PaulGrotesk",
            marginLeft: "-1rem",
          }}
        >
          {images[activeStep].label}
        </Typography>
      </Paper>
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default ImgSlider;
