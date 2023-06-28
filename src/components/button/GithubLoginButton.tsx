import { signIn } from 'next-auth/react';
import { BrothButton } from './BrothButton';
function GitHubLoginButton() {
  return (
    <BrothButton
      onClick={() => signIn('github')}
      style={{ backgroundColor: '#24292d' }}
    >
      Sign in with GitHub
    </BrothButton>
  );
}

export default GitHubLoginButton;
