import { useForm } from 'react-hook-form';
import { LoginPost, LoginPostResolver } from '@/schemas/LoginSchema';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { BrothTextField } from '../../components/textfield/BrothTextField';
import { PasswordInput } from '../../components/textfield/PasswordInput';
import { useState } from 'react';
import BrothLink from '@/components/link/BrothLink';
import { useSession, signIn } from 'next-auth/react';
import { BrothTypography } from '../../components/typography/BrothTypography';

export function LoginForm({
  callBackPath = '/mypage',
}: {
  callBackPath?: string;
  isBizLogin?: boolean;
}) {
  const { handleSubmit, control } = useForm<LoginPost>({
    resolver: LoginPostResolver,
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [error] = useState<string>('');
  const { status } = useSession();

  const onSubmit = async (data: LoginPost) => {
    signIn('django-credentials', {
      username: data.username,
      password: data.password,
      callbackUrl: callBackPath,
    });
  };

  if (status === 'authenticated')
    return (
      <Box textAlign="center">
        <BrothTypography variant="h4" textAlign="center">
          Already logged in
        </BrothTypography>
        <Button href="/mypage" variant="contained" component={BrothLink}>
          Go to my page
        </Button>
      </Box>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <Alert
          sx={{
            margin: '0',
          }}
          severity="error"
        >
          {error}
        </Alert>
      )}

      <div>
        <BrothTextField<LoginPost>
          label="email"
          name="username"
          autoComplete="username"
          control={control}
          margin="normal"
          fullWidth
          autoFocus
        />
      </div>

      <div>
        <PasswordInput<LoginPost>
          name="password"
          label="Password"
          control={control}
          margin="normal"
          fullWidth
        />
      </div>

      <Box
        display="flex"
        justifyContent={{
          xs: 'center',
          sm: 'space-between',
        }}
        alignItems={{
          xs: 'flex-start',
          sm: 'center',
        }}
        flexDirection={{
          xs: 'column',
          sm: 'row',
        }}
        mb={{
          xs: 2,
          sm: 1,
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </FormGroup>
        <BrothLink href="#">Forgot your password?</BrothLink>
      </Box>

      <div>
        <Button variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </div>
    </form>
  );
}
