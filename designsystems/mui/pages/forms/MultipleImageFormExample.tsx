import { NextPage } from 'next';
import { Box, Button, Container, Divider, Grid, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import yup from '../../../global/init/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from '../../hooks/useSnackbar';
import { BrothImageArrayButton } from '../../components/button/BrothImageArrayButton';
import { MuiTypography } from '../../components/typography/MuiTypography';
import BrothImage from '../../components/image/BrothImage';
import CircularProgress from '@mui/material/CircularProgress';

interface formTypes {
  images:
    | {
        src: string;
        loading: boolean;
      }[]
    | null;
}

const formSchema = yup.object({
  images: yup.array().required().min(1, '必須項目です'),
});

const MultipleImageFormExample: NextPage = () => {
  const { openSnackbar } = useSnackbar();

  // configure form
  const { handleSubmit, control, reset, watch } = useForm<formTypes>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      images: [],
    },
  });

  async function onSubmit(formData: formTypes) {
    const numImages = formData?.images?.length || 0;
    console.log('formData', formData);

    openSnackbar(
      `Uploaded ${numImages} ${
        numImages > 1 ? `images` : `image`
      } successfully`,
      'success'
    );

    // reset form
    reset();
  }

  async function onError(errors) {
    console.log('errors', errors);
    openSnackbar('Please upload at least one image.', 'error');
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            <MuiTypography variant="h3" component="h1">
              Upload Images
            </MuiTypography>
            <MuiTypography variant="body1">
              Select one or more images to upload.
            </MuiTypography>
          </Grid>
          {watch('images')?.map((image, i) => (
            <Grid key={i} item xs={6} sm={2} sx={{ textAlign: 'center' }}>
              {image.loading ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="132px"
                  height="132px"
                >
                  <CircularProgress />
                </Box>
              ) : (
                <BrothImage
                  src={image.src}
                  objectFit="cover"
                  alt="Image Preview"
                  layout="responsive"
                  width="132"
                  height="132"
                />
              )}
            </Grid>
          ))}
          <Grid item xs={6} sm={2}>
            <BrothImageArrayButton control={control} name="images" />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Stack direction="row" spacing={1}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  reset();
                  openSnackbar('Clearing form', 'info');
                }}
              >
                Clear
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default MultipleImageFormExample;
