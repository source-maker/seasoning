import {
  Button,
  Container,
  Link as MuiLink,
  TextField,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import { Loading } from '@/components/asset/Loading';
import BrothLink from '@/components/link/BrothLink';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const LoginDetails: NextPage = () => {
  const { data: currentUser } = useCurrentUser();

  if (!currentUser) return <Loading />;

  return (
    <Container>
      <Typography variant="h1" sx={{ margin: '1em auto' }}>
        ログイン情報 編集
      </Typography>

      <TextField
        label="メールアドレス"
        name="username"
        InputProps={{
          readOnly: true,
        }}
        defaultValue={currentUser.name}
      />

      <Button
        href={'/mypage/account/password-change'}
        component={BrothLink}
        variant="contained"
        fullWidth
        color="primary"
        type="submit"
        sx={{ mt: 2, mb: 4 }}
      >
        パスワードを変更する
      </Button>

      <BrothLink href="/mypage/account/unsubscribe">
        <Typography align="center">
          <MuiLink>アカウントを削除する</MuiLink>
        </Typography>
      </BrothLink>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default LoginDetails;
