import { Stepper } from '@mui/material';

export interface ICustomStepperProps {
  children: React.ReactNode;
  activeStep: number;
}

export function BrothStepper({ children, activeStep }: ICustomStepperProps) {
  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      {children}
    </Stepper>
  );
}
