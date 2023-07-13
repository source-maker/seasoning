import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { BrothTextField } from '@/components/textfield/BrothTextField';
import { PasswordInput } from '@/components/textfield/PasswordInput';
import { useState } from 'react';
import BrothLink from '@/components/link/BrothLink';
import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { LoginPostType, useLoginSchema } from '@/schemas/LoginSchema';

export function LoginForm({
  callBackPath = '/mypage',
}: {
  callBackPath?: string;
  isBizLogin?: boolean;
}) {
  const { t } = useTranslation('auth');
  const { LoginPostResolver, LoginPostSchema } = useLoginSchema();

  const { handleSubmit, control } = useForm<InferType<typeof LoginPostSchema>>({
    resolver: LoginPostResolver,
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [error] = useState<string>('');

  const onSubmit = async (data: InferType<typeof LoginPostSchema>) => {
    signIn('django-credentials', {
      username: data.username,
      password: data.password,
      callbackUrl: callBackPath,
    });
  };

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
        <BrothTextField<LoginPostType>
          name="username"
          label={t('email')}
          autoComplete="username"
          control={control}
          margin="normal"
          fullWidth
          autoFocus
        />
      </div>

      <div>
        <PasswordInput
          name="password"
          label={t('password')}
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
            label={t('remember_me')}
          />
        </FormGroup>
        <BrothLink href="#">{t('remember_me')}</BrothLink>
      </Box>

      <div>
        <Button variant="contained" type="submit" fullWidth>
          {t('sign_in')}
        </Button>
      </div>
    </form>
  );
}
