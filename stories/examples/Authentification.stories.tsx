import LoginCenteredExample from 'src/pages/showcase/authentification/LoginCenteredExample';
import LoginSocials from 'src/pages/showcase/authentification/LoginSocials';
import PasswordReset from 'src/pages/showcase/authentification/passwordReset';
import PasswordResetSuccess from 'src/pages/showcase/authentification/passwordResetSuccess';
import { showcaseParameters } from './showcaseParameters';

export default {
  title: 'Showcase/Authentification',
  parameters: {
    ...showcaseParameters,
    nextAuthMock: {
      session: {
        data: {
          id: 999,
          login: 'user',
          role: 'user',
          roles: ['user'],
          username: 'User',
          email: 'user@local',
        },
        status: 'unauthenticated',
      },
    },
  },
};

export const LoginCentered = () => <LoginCenteredExample />;
export const SocialsLogin = () => <LoginSocials />;
export const ResetPassword = () => <PasswordReset />;
export const SuccessReset = () => <PasswordResetSuccess />;
