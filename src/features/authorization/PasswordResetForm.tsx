import { useForm } from 'react-hook-form';
import {
  PasswordResetType,
  PasswordResetResolver,
} from '@/schemas/PasswordResetSchema';
import { Button } from '@mui/material';
import BrothLink from '@/components/link/BrothLink';
import { MuiTextField } from '@/components/textfield/MuiTextField';

// TODO: decide password reset functionality in demo or not
export function PasswordResetForm() {
  const { handleSubmit, control } = useForm<PasswordResetType>({
    resolver: PasswordResetResolver,
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = async () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MuiTextField<PasswordResetType>
          id="username"
          name="username"
          type="email"
          label="email"
          control={control}
          fullWidth
          margin="normal"
          helperText={<BrothLink href="/">Forgot your password?</BrothLink>}
        />
      </div>

      <Button variant="contained" type="submit" fullWidth>
        Reset Password
      </Button>
    </form>
  );
}
