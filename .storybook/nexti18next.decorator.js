import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export const withNexti18next = (Story, context) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};
