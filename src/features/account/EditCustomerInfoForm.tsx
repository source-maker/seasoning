import { Button } from '@mui/material';
import { useEffect } from 'react';
import { BrothTextField } from '@/components/textfield/BrothTextField';
import { Loading } from '@/components/asset/Loading';
import { useForm } from 'react-hook-form';
import { swaggerClient } from '@/init/swaggerClient';
import { User } from '@/init/swagger';
import { Stack } from '@mui/system';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useSnackbar } from '@/hooks/useSnackbar';

export function EditCustomerInfoForm() {
  const { data: currentUser } = useCurrentUser();
  const { openSnackbar } = useSnackbar();

  type FormSchema = Pick<User, 'name' | 'money' | 'password'>;

  const { handleSubmit, control, reset } = useForm<FormSchema>({
    defaultValues: currentUser ? currentUser : undefined,
  });

  // re-update form when currentUser changes
  useEffect(() => {
    if (currentUser) {
      reset(currentUser);
    }
  }, [currentUser, reset]);

  const onSubmit = async (formData: FormSchema) => {
    try {
      if (currentUser) {
        const newData = { ...currentUser, ...formData };
        await swaggerClient?.me.meUpdate(newData);
        openSnackbar('Updated successfully', 'success');
      }
    } catch (error) {
      openSnackbar('Error updating', 'error');
      console.log('update error', JSON.stringify(error, null, 2));
    }
  };

  if (!currentUser) return <Loading />;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
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
    </>
  );
}
