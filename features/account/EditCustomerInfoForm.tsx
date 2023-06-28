import { Alert, Button, Snackbar } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BrothTextField } from '@/components/textfield/BrothTextField';
import { Loading } from '@/components/asset/Loading';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import { swaggerClient } from '@/init/swaggerClient';
import { User } from '@/init/swagger';
import { Stack } from '@mui/system';

interface IEditCustomerInfoFormProps {
  onSuccessRoute?: string;
  onSuccessData?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function EditCustomerInfoForm({
  onSuccessRoute,
  onSuccessData,
}: IEditCustomerInfoFormProps) {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  type FormSchema = Pick<User, 'name' | 'money' | 'password'>;

  const { handleSubmit, control, reset } = useForm<FormSchema>({
    defaultValues: currentUser || {},
  });

  // Reset form when user changes
  useEffect(() => {
    if (currentUser) {
      reset({ ...currentUser });
    }
  }, [reset, currentUser]);

  const onSubmit = async (formData: FormSchema) => {
    try {
      if (currentUser) {
        await swaggerClient.me.meUpdate({ ...currentUser, ...formData });
        await setError('');
        mutate('/api/me/');
        setOpenSnackbar(true);

        router.push({
          pathname: onSuccessRoute,
          query: onSuccessData,
        });
      }
    } catch (error) {
      setError('Error updating');
      console.log('update error', JSON.stringify(error, null, 2));
    }
  };

  if (!currentUser) return <Loading />;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {error && <Alert severity="error">{error}</Alert>}
          <BrothTextField
            label="Name"
            name="name"
            control={control}
            placeholder="John Doe"
            fullWidth
          />
          <BrothTextField
            label="Password"
            name="password"
            control={control}
            type="password"
            fullWidth
          />
          <BrothTextField
            label="Money"
            name="money"
            control={control}
            placeholder="100000"
            fullWidth
          />
          <Button variant="contained" fullWidth color="primary" type="submit">
            Update
          </Button>
        </Stack>
      </form>

      <Snackbar
        message={'Updated successfully'}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      ></Snackbar>
    </>
  );
}
