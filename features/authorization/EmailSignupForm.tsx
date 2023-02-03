import { useForm } from 'react-hook-form';
import { Alert, Button } from '@mui/material';
import { PasswordInput } from '../../components/textfield/PasswordInput';
import { useRouter } from 'next/router';
import { SignupPostResolver } from '../../services/schemas/SignupSchema';
import { mutate } from 'swr';
import { useState } from 'react';
import { BrothTextField } from '@/components/textfield/BrothTextField';
import { swaggerClient } from '../../lib/swaggerClient';
import { User } from '@/lib/swagger';
import { Stack } from '@mui/system';

EmailSignupForm.defaultProps = {
  onClose: () => null,
};

export function EmailSignupForm() {
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
      // TODO: create snackbar for successful signup notification
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
          label="email"
          name="name"
          control={control}
          validation={{
            required: true,
          }}
          fullWidth
        />

        <PasswordInput<User>
          label="password"
          name="password"
          control={control}
          validation={{
            required: true,
          }}
          fullWidth
        />

        <Button variant="contained" fullWidth type="submit">
          Create Account
        </Button>
      </Stack>
    </form>
  );
}
