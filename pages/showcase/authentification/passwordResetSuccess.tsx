import { BrandLogo } from '@/components/asset/BrandLogo';
import { Box, Button, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';

const PasswordResetSuccess: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        height="100vh"
        justifyContent="center"
      >
        <BrandLogo />
        <Typography variant="h6" textAlign={'center'}>
          パスワードをリセットするためのアドレスをメールで送信しました。
          <br />
          受信ボックスを確認してください。
        </Typography>

        <Button href="/login" variant="contained" fullWidth type="submit">
          ログイン画面へ
        </Button>
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PasswordResetSuccess;
