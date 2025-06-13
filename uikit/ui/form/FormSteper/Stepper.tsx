"use client";
import { cn } from "@/uikit/cn";
import { useState } from "react";
import { Button, Card } from "../../basic";
import { Step } from "./Step";
import { StepError, StepperContext } from "./steper.context";
import StepIndicator, { StepConnector } from "./StepIndicator";
import { getSteps, useStepContent } from "./stepper.hooks";

type StepperProps = {
  children: React.ReactNode;
  onComplete?: () => void | Promise<void>;
  completeLabel?: string;
  isOnComplete?: boolean;
  stepperConfig?: { name: string }[];
};

export const Stepper = ({
  children,
  onComplete,
  completeLabel = "Complete",
  isOnComplete = true,
  stepperConfig,
}: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepErrors, setStepErrors] = useState<Record<number, StepError>>({});
  const steps = getSteps(children);
  const totalStep = steps.length;

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        totalStep,
        stepErrors,
        setStepErrors,
      }}
    >
      <StepContent
        onComplete={onComplete}
        completeLabel={completeLabel}
        isOnComplete={isOnComplete}
        stepperConfig={stepperConfig}
      >
        {children}
      </StepContent>
    </StepperContext.Provider>
  );
};

Stepper.dispplayName = "Stepper";
Stepper.Step = Step;

type StepContentProps = {
  children: React.ReactNode;
  onComplete?: () => void | Promise<void>;
  completeLabel?: string;
  isOnComplete?: boolean;
  stepperConfig?: { name: string }[];
};

const StepContent = ({
  children,
  onComplete,
  completeLabel = "Complete",
  isOnComplete = true,
  stepperConfig,
}: StepContentProps) => {
  const {
    currentStep,
    totalStep,
    stepErrors,
    handleNext,
    handlePrevious,
    steps,
  } = useStepContent(children);
  return (
    <>
      <Card className="w-full mx-auto p-4 shadow-none">
        <div className="flex items-center justify-between">
          {Array.from({ length: totalStep }, (_, i) => i + 1).map(
            (step, index) => {
              return (
                <div
                  key={step}
                  className="flex-1 flex flex-col items-center relative"
                >
                  <StepIndicator
                    key={step}
                    index={index}
                    stepperConfig={stepperConfig}
                    step={step}
                    error={stepErrors[step]}
                    isActive={currentStep === step}
                    isComplete={currentStep > step}
                  />
                  {step < totalStep && (
                    <StepConnector
                      isCompleted={
                        currentStep > step && !stepErrors[step]?.hasError
                      }
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </Card>

      <div> {steps[currentStep - 1]}</div>
      <Card className="flex justify-between items-center p-4">
        <Button
          color="primary"
          startIcon={"arrowLeft"}
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="rounded px-6"
        >
          Previous
        </Button>

        <Button
          color="primary"
          endIcon={"arrowRight"}
          onClick={() => handleNext(onComplete)}
          disabled={currentStep > totalStep}
          className={cn(
            "rounded px-6",
            currentStep === totalStep
              ? isOnComplete
                ? "bg-blue-600"
                : "hidden"
              : "bg-blue-600"
          )}
        >
          {currentStep === totalStep
            ? isOnComplete
              ? completeLabel
              : ""
            : "Next"}
        </Button>
      </Card>
    </>
  );
};

StepContent.displayName = "StepContent";
