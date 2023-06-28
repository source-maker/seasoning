import { InferType } from 'yup';
import yup from '../init/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const PasswordChangeSchema = yup.object({
  oldPassword: yup.string().required(),
  newPassword: yup
    .string()
    .required()
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[A-Z]+/, 'Must contain at least 1 uppercase letter.')
    .matches(/[a-z]+/, 'Must contain at least one lowercase letter.')
    .matches(/[@$!%*#?&]+/, 'Must contain at least one special character.'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('newPassword')], 'Passwords do not match.'),
});

export type PasswordChangeType = InferType<typeof PasswordChangeSchema>;

export const PasswordChangeResolver = yupResolver(PasswordChangeSchema);
