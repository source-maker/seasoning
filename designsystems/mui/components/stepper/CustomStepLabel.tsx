import { styled } from '@mui/material/styles';
import { StepButton, StepLabel } from '@mui/material';
import { StepIconProps } from '@mui/material/StepIcon';
import { Dispatch, SetStateAction } from 'react';

const CustomStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ ownerState, theme }) => ({
    color: theme.palette.border.light,
    ...(ownerState.active && {
      color: theme.palette.secondary.main,
    }),
    '& .CustomStepIcon-completedIcon': {
      color: theme.palette.secondary.main,
      zIndex: 1,
      fontSize: 18,
    },
    display: 'flex',
    height: '1.5rem',
    alignItems: 'center',
    '& .CustomStepIcon-circle': {
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  })
);

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className=" CustomStepIcon-circle CustomStepIcon-completedIcon" />
      ) : (
        <div className="CustomStepIcon-circle" />
      )}
    </CustomStepIconRoot>
  );
}

export interface ICustomStepLabelProps {
  stepIndex: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
}

export function CustomStepLabel({
  stepIndex,
  setActiveStep,
  children,
}: ICustomStepLabelProps) {
  return (
    <>
      <StepButton
        onClick={() => setActiveStep(stepIndex)}
        icon={
          <StepLabel
            StepIconComponent={CustomStepIcon}
            componentsProps={{
              label: {
                style: {
                  fontSize: '0.6250em',
                  margin: '0',
                },
              },
            }}
          >
            {children}
          </StepLabel>
        }
      ></StepButton>
    </>
  );
}
