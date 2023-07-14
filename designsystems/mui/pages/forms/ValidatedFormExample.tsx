import * as React from 'react';
import { MuiButton } from '../../components/button/MuiButton';
import { MuiTextField } from '../../components/textfield/MuiTextField';
import { MuiTypography } from '../../components/typography/MuiTypography';
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import { RHFSelect } from '../../components/select/RHFSelect';
import yup from '../../../global/init/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from '../../hooks/useSnackbar';

interface formTypes {
  name: string;
  brand: string;
  category: string;
  description: string;
}

/**
 * Yup schema is typically stored in a separate file
 * at /services/schemas.
 * This is here for demo purposes.
 */
const formSchema = yup.object({
  name: yup.string().required(),
  brand: yup.string().required(),
  price: yup.number().required(),
  category: yup.string().required(),
  description: yup.string().required(),
});

export default function ValidatedFormExample() {
  const { openSnackbar } = useSnackbar();
  const { handleSubmit, control, reset } = useForm<formTypes>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (formData: formTypes) => {
    console.log('formData', formData);
    openSnackbar('Product updated successfully', 'success');
    reset();
  };

  function handleDelete() {
    console.log('deleting');
    openSnackbar('Product Deleted', 'error');
    reset();
  }
  return (
    <Container maxWidth="md">
      <Box py={8}>
        <MuiTypography variant="h3" component="h1">
          Update Product
        </MuiTypography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} md={6}>
              <MuiTextField
                label="Name"
                name="name"
                control={control}
                type="text"
                placeholder="Ex: Apple iPhone 12 Pro Max 256GB"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiTextField
                label="Brand"
                name="brand"
                control={control}
                type="text"
                placeholder="Ex: Apple"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiTextField
                label="Price"
                name="price"
                type="number"
                control={control}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">¥</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RHFSelect label="Category" name="category" control={control}>
                <MenuItem value={'Electronics'}>Electronics</MenuItem>
                <MenuItem value={'PC'}>PC</MenuItem>
                <MenuItem value={'Gaming'}>Gaming</MenuItem>
                <MenuItem value={'Phones'}>Phones</MenuItem>
              </RHFSelect>
            </Grid>
            <Grid item xs={12}>
              <MuiTextField
                label="Description"
                name="description"
                control={control}
                placeholder="Write a description"
                rows={4}
                multiline
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2}>
                <MuiButton type="submit" size="large">
                  Update Product
                </MuiButton>
                <MuiButton
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  size="large"
                  onClick={() => handleDelete()}
                >
                  Delete
                </MuiButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
