import * as React from 'react';
import { MuiButton } from '../../components/button/MuiButton';
import { MuiTypography } from '../../components/typography/MuiTypography';
import { Box, Container, Grid, Paper, Step } from '@mui/material';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import yup from '../../../global/init/yup';
import { useSnackbar } from '../../hooks/useSnackbar';
import { BrothStepper } from '../../components/stepper/BrothStepper';
import { BrothStepLabel } from '../../components/stepper/BrothStepLabel';
import { Stack } from '@mui/system';
import { MuiTextField } from '../../components/textfield/MuiTextField';
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
        <MuiTypography component="h2" variant="h5">
          Shipping Address
        </MuiTypography>
      </Grid>
      <Grid item xs={12} md={6}>
        <MuiTextField
          name="lastName"
          label="Last Name"
          control={control}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MuiTextField
          name="firstName"
          label="First Name"
          control={control}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <MuiTextField
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
        <MuiTypography component="h2" variant="h5">
          Payment Method
        </MuiTypography>
      </Grid>
      <Grid item xs={12} md={12}>
        {/* TODO: have redacted, spaced functionality to textfield for credit cards*/}
        <MuiTextField
          name="creditCard"
          label="Credit Card Number"
          control={control}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MuiTextField name="csv" label="CSV Code" control={control} fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* TODO: add regex to autoinsert / and nums for expiration date format */}
        <MuiTextField
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
        <MuiTypography component="h2" variant="h5" baseline>
          Review Order
        </MuiTypography>
        <MuiTypography variant="body1">
          Please check your order details below:
        </MuiTypography>
        <MuiTypography variant="body1">
          <b>Last Name:</b> {getValues('lastName')} <br />
          <b>First Name:</b> {getValues('firstName')} <br />
          <b>Address:</b> {getValues('address')} <br />
          <b>Credit Card:</b> {getValues('creditCard')} <br />
          <b>Expiration Date:</b> {getValues('expirationDate')} <br />
        </MuiTypography>
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
  const { openSnackbar } = useSnackbar();

  // FORM SCHEMA & METHODS
  const formMethods = useForm<formSchemaTypes>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (formData) => {
    console.log('formData', formData);
    openSnackbar(
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
    openSnackbar('Form has been cleared', 'info');
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
        <MuiTypography component="h1" variant="h3">
          Cart Checkout
        </MuiTypography>

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
                      <MuiButton onClick={decreaseStep}>Back</MuiButton>
                    )}
                    {!isLastStep() && (
                      <MuiButton onClick={incrementStep}>Next</MuiButton>
                    )}
                    {isLastStep() && (
                      <>
                        <MuiButton type="submit">Place Order</MuiButton>
                        <MuiButton onClick={restartForm} variant="outlined">
                          Restart
                        </MuiButton>
                      </>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </Paper>
      </Box>
    </Container>
  );
}
