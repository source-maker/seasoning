import { InferType } from 'yup';
import yup from '@/init/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';

export const useSignupSchema = () => {
  const { t } = useTranslation('auth');

  const SignupPostSchema = yup.object({
    name: yup
      .string()
      .email(t('error_not_username'))
      .required(t('error_username_required')),
    password: yup.string().required(t('error_password_required')),
  });

  const SignupPostResolver = yupResolver(SignupPostSchema);

  return { SignupPostSchema, SignupPostResolver };
};

export type SignupPostType = InferType<
  ReturnType<typeof useSignupSchema>['SignupPostSchema']
>;
