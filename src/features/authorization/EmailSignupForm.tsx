import { useForm } from 'react-hook-form';
import { Alert, Button } from '@mui/material';
import { PasswordInput } from '../../components/textfield/PasswordInput';
import { useRouter } from 'next/router';
import { mutate } from 'swr';
import { useState } from 'react';
import { BrothTextField } from '@/components/textfield/BrothTextField';
import { swaggerClient } from '@/init/swaggerClient';
import { User } from '@/init/swagger';
import { Stack } from '@mui/system';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useTranslation } from 'next-i18next';
import { useSignupSchema } from '@/schemas/SignupSchema';

EmailSignupForm.defaultProps = {
  onClose: () => null,
};

export function EmailSignupForm() {
  const { SignupPostResolver } = useSignupSchema();
  const { t } = useTranslation('auth');
  const { openSnackbar } = useSnackbar();
  const { handleSubmit, control } = useForm<User>({
    resolver: SignupPostResolver,
    defaultValues: {
      name: '',
      password: '',
    },
  });

  const [error, setError] = useState<string>('');
  const router = useRouter();

  const onSubmit = async (user: User) => {
    try {
      await swaggerClient.signup.signupCreate(user);
      setError('');
      mutate('/api/me/');
      router.push('/signup/complete');
      openSnackbar('Signup successful', 'success');
    } catch (error) {
      setError('There was a problem with your email or password.');
      console.log('signup error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}

        <BrothTextField
          name="name"
          label={t('email')}
          control={control}
          validation={{
            required: true,
          }}
          fullWidth
        />

        <PasswordInput<User>
          name="password"
          label={t('password')}
          control={control}
          validation={{
            required: true,
          }}
          fullWidth
        />

        <Button variant="contained" fullWidth type="submit">
          {t('signup')}
        </Button>
      </Stack>
    </form>
  );
}
