import { StepButton, StepLabel } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export interface ICustomStepLabelProps {
  stepIndex: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
}

export function BrothStepLabel({
  stepIndex,
  setActiveStep,
  children,
}: ICustomStepLabelProps) {
  return (
    <>
      <StepButton
        onClick={() => setActiveStep(stepIndex)}
        icon={<StepLabel>{children}</StepLabel>}
      ></StepButton>
    </>
  );
}
