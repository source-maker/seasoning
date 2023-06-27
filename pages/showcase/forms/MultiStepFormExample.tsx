import * as React from 'react';
import { BrothButton } from '@/components/button/BrothButton';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { Box, Container, Grid, Paper, Step } from '@mui/material';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import yup from 'init/yup';
import { useSnackbar } from 'hooks/useSnackbar';
import BrothSnackbar from '@/components/snackbar/BrothSnackbar';
import { BrothStepper } from '@/components/stepper/BrothStepper';
import { BrothStepLabel } from '@/components/stepper/BrothStepLabel';
import { Stack } from '@mui/system';
import { BrothTextField } from '@/components/textfield/BrothTextField';
import { yupResolver } from '@hookform/resolvers/yup';

const steps: {
  label: string;
  content: React.ReactNode;
}[] = [
  {
    label: 'Shipping Address',
    content: <Step1 />,
  },
  {
    label: 'Payment Method',
    content: <Step2 />,
  },
  {
    label: 'Review Order',
    content: <Step3 />,
  },
];

function Step1() {
  const { control } = useFormContext();

  return (
    <>
      <Grid item xs={12} md={12}>
        <BrothTypography component="h2" variant="h5">
          Shipping Address
        </BrothTypography>
      </Grid>
      <Grid item xs={12} md={6}>
        <BrothTextField
          name="lastName"
          label="Last Name"
          control={control}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BrothTextField
          name="firstName"
          label="First Name"
          control={control}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <BrothTextField
          name="address"
          label="Address"
          control={control}
          fullWidth
        />
      </Grid>
    </>
  );
}

function Step2() {
  const { control } = useFormContext();

  return (
    <>
      <Grid item xs={12} md={12}>
        <BrothTypography component="h2" variant="h5">
          Payment Method
        </BrothTypography>
      </Grid>
      <Grid item xs={12} md={12}>
        {/* TODO: have redacted, spaced functionality to textfield for credit cards*/}
        <BrothTextField
          name="creditCard"
          label="Credit Card Number"
          control={control}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BrothTextField
          name="csv"
          label="CSV Code"
          control={control}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* TODO: add regex to autoinsert / and nums for expiration date format */}
        <BrothTextField
          name="expirationDate"
          label="Expiration Date"
          control={control}
          fullWidth
        />
      </Grid>
    </>
  );
}

function Step3() {
  const { getValues } = useFormContext();

  return (
    <>
      <Grid item xs={12} md={12}>
        <BrothTypography component="h2" variant="h5" baseline>
          Review Order
        </BrothTypography>
        <BrothTypography variant="body1">
          Please check your order details below:
        </BrothTypography>
        <BrothTypography variant="body1">
          <b>Last Name:</b> {getValues('lastName')} <br />
          <b>First Name:</b> {getValues('firstName')} <br />
          <b>Address:</b> {getValues('address')} <br />
          <b>Credit Card:</b> {getValues('creditCard')} <br />
          <b>Expiration Date:</b> {getValues('expirationDate')} <br />
        </BrothTypography>
      </Grid>
    </>
  );
}

interface formSchemaTypes {
  lastName: string;
  firstName: string;
  address: string;

  creditCard: string;
  csv: string;
  expirationDate: string;
}

/**
 * Yup schema is typically stored in a separate file
 * at /services/schemas.
 * This is here for demo purposes.
 */
const formSchema = yup.object({
  lastName: yup.string().required(),
  firstName: yup.string().required(),
  address: yup.string().required(),

  creditCard: yup.string().required(),
  csv: yup.string().required(),
  expirationDate: yup.string().required(),
});

export default function MultiStepFormExample() {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const { isActive, setIsActive, message, severity, openSnackBar } =
    useSnackbar();

  // FORM SCHEMA & METHODS
  const formMethods = useForm<formSchemaTypes>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (formData) => {
    console.log('formData', formData);
    openSnackBar(
      `Thank you for your order, ${
        formData.lastName + ' ' + formData.firstName
      }! We will ship your order to ${formData.address}`,
      'success'
    );
    formMethods.reset();
    setCurrentStep(0);
  };

  function restartForm() {
    formMethods.reset();
    setCurrentStep(0);
    openSnackBar('Form has been cleared', 'info');
  }

  // FORM NAVIGATION UTILITIES
  function renderStep(stepIndex: number) {
    return steps[stepIndex].content;
  }

  async function incrementStep() {
    // stop if last step
    if (currentStep >= steps.length - 1) return;

    const isValid = await isStepValid();
    console.log('isValid', isValid);
    if (!isValid) return;

    setCurrentStep((prev) => prev + 1);
  }

  async function isStepValid() {
    if (currentStep === 0) {
      return await formMethods.trigger(['lastName', 'firstName', 'address']);
    } else if (currentStep === 1) {
      return await formMethods.trigger(['creditCard', 'csv', 'expirationDate']);
    } else if (currentStep === 2) {
      return true;
    } else {
      return false;
    }
  }

  function decreaseStep() {
    if (currentStep >= steps.length - 1) return; // stop if last step
    setCurrentStep((prev) => prev - 1);
  }

  function isLastStep() {
    return currentStep === steps.length - 1;
  }

  function isFirstStep() {
    return currentStep === 0;
  }

  return (
    <Container maxWidth="md">
      <Box py={8}>
        <BrothTypography component="h1" variant="h3">
          Cart Checkout
        </BrothTypography>

        {/* Stepper Navigation */}
        <BrothStepper activeStep={currentStep}>
          {steps.map(({ label }, index) => (
            <Step key={label}>
              <BrothStepLabel stepIndex={index} setActiveStep={setCurrentStep}>
                {label}
              </BrothStepLabel>
            </Step>
          ))}
        </BrothStepper>

        <Paper sx={{ p: 2, my: 2 }}>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
              <Grid container direction="row" spacing={2}>
                {/* Step Content */}
                {renderStep(currentStep)}

                <Grid item xs={12}>
                  {/* Action Bar */}
                  <Stack direction="row" spacing={1}>
                    {!isLastStep() && !isFirstStep() && (
                      <BrothButton onClick={decreaseStep}>Back</BrothButton>
                    )}
                    {!isLastStep() && (
                      <BrothButton onClick={incrementStep}>Next</BrothButton>
                    )}
                    {isLastStep() && (
                      <>
                        <BrothButton type="submit">Place Order</BrothButton>
                        <BrothButton onClick={restartForm} variant="outlined">
                          Restart
                        </BrothButton>
                      </>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </form>

            <BrothSnackbar
              message={message}
              isActive={isActive}
              setIsActive={setIsActive}
              severity={severity}
            />
          </FormProvider>
        </Paper>
      </Box>
    </Container>
  );
}
