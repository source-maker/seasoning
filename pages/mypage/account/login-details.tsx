import {
  Button,
  Container,
  Link as MuiLink,
  TextField,
  Typography,
} from '@mui/material';
import { useAuth } from '../../../hooks/useAuth';
import type { NextPage } from 'next';
import { Loading } from '../../../components/asset/Loading';

import Link from '@/components/link/Link';

const LoginDetails: NextPage = () => {
  const { currentUser } = useAuth();

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
        component={Link}
        variant="contained"
        fullWidth
        color="primary"
        type="submit"
        sx={{ mt: 2, mb: 4 }}
      >
        パスワードを変更する
      </Button>

      <Link href="/mypage/account/unsubscribe">
        <Typography align="center">
          <MuiLink>アカウントを削除する</MuiLink>
        </Typography>
      </Link>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default LoginDetails;
