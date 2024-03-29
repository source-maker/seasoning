import { NextPage } from 'next';
import { Button, Container, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import yup from '../../../global/init/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BrothAvatarEditButton } from '../../components/button/BrothAvatarEditButton';
import { MuiTextField } from '../../components/textfield/MuiTextField';
import { useSnackbar } from '../../hooks/useSnackbar';
import { getMime } from '../../helpers/fileHelpers';

interface formTypes {
  profileImg: string;
}

const formSchema = yup.object({
  profileImg: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const ImageUploadFormExample: NextPage = () => {
  const { openSnackbar } = useSnackbar();

  // configure form
  const { setValue, handleSubmit, control, reset } = useForm<formTypes>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      profileImg: '',
    },
  });

  async function onSubmit(formData: formTypes) {
    // convert image to base64
    const images: { id: number; image: string; image_type: string }[] | null =
      [];

    if (formData.profileImg)
      images.push({
        id: 1,
        image: formData.profileImg,
        image_type: getMime(formData.profileImg),
      });

    try {
      openSnackbar('Profile saved successfully', 'success');
      console.log('formData', formData);
    } catch (error) {
      openSnackbar('Error updating profile', 'error');
    }
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <BrothAvatarEditButton
              name="profileImg"
              control={control}
              setValue={setValue}
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              name="name"
              label="Name"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              name="email"
              label="Email"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={() => {
                reset();
                openSnackbar('Clearing form', 'info');
              }}
              fullWidth
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default ImageUploadFormExample;
