import { InferType } from 'yup';
import yup from '../init/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const SignupPostSchema = yup.object({
  name: yup.string().email('Please enter a valid email address.').required(),
  password: yup.string().required(),
});
export type SignupPostSchema = InferType<typeof SignupPostSchema>;

export const SignupPostResolver = yupResolver(SignupPostSchema);
