"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import ChooseTicket from "@/components/ChooseTicket";

export default function TicketPage({ params }) {
  const { id } = params;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      label: "Tickets",
      component: (
        <ChooseTicket handleNext={handleNext} handleBack={handleBack} id={id} />
      ),
    },
    {
      label: "Details",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
  ];

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {steps[activeStep].component}
    </Container>
  );
}
