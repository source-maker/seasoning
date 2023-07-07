import { InferType } from 'yup';
import yup from '@/init/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const LoginPostSchema = yup.object({
  username: yup
    .string()
    .email('Please enter a valid email address.')
    .required(),
  password: yup.string().required(),
});
export type LoginPost = InferType<typeof LoginPostSchema>;

export const LoginPostResolver = yupResolver(LoginPostSchema);
