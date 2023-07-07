import { InferType } from 'yup';
import yup from '@/init/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';

export const useLoginSchema = () => {
  const { t } = useTranslation('auth');

  const LoginPostSchema = yup.object({
    username: yup
      .string()
      .email(t('error_not_username'))
      .required(t('error_username_required')),
    password: yup.string().required(t('error_password_required')),
  });

  const LoginPostResolver = yupResolver(LoginPostSchema);

  return { LoginPostSchema, LoginPostResolver };
};

export type LoginPostType = InferType<
  ReturnType<typeof useLoginSchema>['LoginPostSchema']
>;
