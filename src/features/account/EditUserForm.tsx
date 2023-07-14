import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Loading } from '@/components/asset/Loading';
import { useForm } from 'react-hook-form';
import { swaggerClient } from '@/init/swaggerClient';
import { User } from '@/init/swagger';
import { Stack } from '@mui/system';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useTranslation } from 'next-i18next';
import { MuiTextField } from '@/components/textfield/MuiTextField';

export function EditUserForm() {
  const { data: currentUser } = useCurrentUser();
  const { openSnackbar } = useSnackbar();
  const { t } = useTranslation('account');

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
        openSnackbar(t('success_msg'), 'success');
      }
    } catch (error) {
      openSnackbar(t('error_msg'), 'error');
      console.log('update error', JSON.stringify(error, null, 2));
    }
  };

  if (!currentUser) return <Loading />;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <MuiTextField
            label={t('name')}
            name="name"
            control={control}
            placeholder="John Doe"
            fullWidth
          />
          <MuiTextField
            label={t('money')}
            name="money"
            control={control}
            placeholder="100000"
            fullWidth
          />
          <Button variant="contained" fullWidth color="primary" type="submit">
            {t('update_btn')}
          </Button>
        </Stack>
      </form>
    </>
  );
}
