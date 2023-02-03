import { InferType } from 'yup';
import yup from '../../lib/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const PasswordResetSchema = yup.object({
  username: yup
    .string()
    .email('Please enter a valid email address.')
    .required('You must enter an email address.'),
});
export type PasswordResetType = InferType<typeof PasswordResetSchema>;

export const PasswordResetResolver = yupResolver(PasswordResetSchema);
