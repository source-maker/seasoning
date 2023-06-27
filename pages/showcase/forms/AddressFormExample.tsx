import * as React from 'react';
import { BrothButton } from '@/components/button/BrothButton';
import { BrothTextField } from '@/components/textfield/BrothTextField';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { Box, Container, Grid, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import yup from 'init/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'hooks/useSnackbar';
import BrothSnackbar from '@/components/snackbar/BrothSnackbar';
import { YubinBangoCore } from 'init/yubinbango-core';

interface formTypes {
  zip_code: string;
  state: string;
  city: string;
  block: string;
  building: string;
}

/**
 * Yup schema is typically stored in a separate file
 * at /services/schemas.
 * This is here for demo purposes.
 */
const formSchema = yup.object({
  zip_code: yup.string().required().max(8, '入力できる最大文字数は8文字です。'),
  state: yup.string().required(),
  city: yup.string().required(),
  block: yup.string().required(),
  building: yup.string().nullable(),
});

export default function AddressFormExample() {
  const { isActive, setIsActive, message, severity, openSnackBar } =
    useSnackbar();
  const { handleSubmit, control, reset, watch, setValue, getValues } =
    useForm<formTypes>({
      resolver: yupResolver(formSchema),
      defaultValues: {
        zip_code: '',
        state: '',
        city: '',
        block: '',
      },
    });

  const watchPostalcode = watch('zip_code');

  React.useEffect(() => {
    const postalCode = getValues('zip_code');
    if (postalCode) {
      new YubinBangoCore(
        postalCode,
        (addr: { region: string; locality: string; street: string }) => {
          setValue('state', addr.region);
          setValue('city', addr.locality);
          setValue('block', addr.street);
        }
      );
    }
  }, [getValues, setValue, watchPostalcode]);

  const onSubmit = async (formData: formTypes) => {
    console.log('formData', formData);
    openSnackBar(`Address submitted ${JSON.stringify(formData)}`, 'success');
    reset();
  };

  function handleDelete() {
    console.log('clearing');
    openSnackBar('Clearing Fields', 'info');
    reset();
  }
  return (
    <Container maxWidth="md">
      <Box py={8}>
        <BrothTypography variant="h3" component="h1">
          Shipping Address
        </BrothTypography>
        <BrothTypography>
          Enter a Japanese postal code (eg: 1640001), and some fields will be
          filled in automatically.
        </BrothTypography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} md={12}>
              <BrothTextField
                label="Zipcode (郵便番号)"
                name="zip_code"
                control={control}
                placeholder="例：8191116"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BrothTextField
                label="Prefecture (都道府県)"
                name="state"
                control={control}
                placeholder="例：福岡県"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BrothTextField
                label="City (市区町村)"
                name="city"
                control={control}
                placeholder="例：福岡市"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BrothTextField
                label="Street (町域・番地)"
                name="block"
                control={control}
                placeholder="例：1-2-3"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BrothTextField
                label="Building Number (マンション名・号室)"
                name="building"
                control={control}
                placeholder="例：◯◯マンション 201号室"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2}>
                <BrothButton type="submit" size="large">
                  Submit
                </BrothButton>
                <BrothButton
                  variant="outlined"
                  color="info"
                  startIcon={<DeleteIcon />}
                  size="large"
                  onClick={() => handleDelete()}
                >
                  Clear
                </BrothButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
        <BrothSnackbar
          message={message}
          isActive={isActive}
          setIsActive={setIsActive}
          severity={severity}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      </Box>
    </Container>
  );
}
