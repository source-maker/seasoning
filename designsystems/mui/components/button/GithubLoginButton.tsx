import { signIn } from 'next-auth/react';
import { MuiButton } from './MuiButton';
function GitHubLoginButton() {
  return (
    <MuiButton
      onClick={() => signIn('github')}
      style={{ backgroundColor: '#24292d' }}
    >
      Sign in with GitHub
    </MuiButton>
  );
}

export default GitHubLoginButton;
