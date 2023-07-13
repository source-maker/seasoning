import React from 'react';
import LoginCenteredExample from './LoginCenteredExample';
import LoginSocials from './LoginSocials';
import PasswordReset from './passwordReset';
import PasswordResetSuccess from './passwordResetSuccess';
import { storyPageParameters } from '../../../../.storybook/storyPageParameters';

export default {
  title: 'MaterialUI/Pages/Authentification',
  parameters: {
    ...storyPageParameters,
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
