import yup from 'init/yup';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// STEP 1: Define your schema
// TODO: replace "any" with your own type to add type safety to schema
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ExampleSchema: yup.Schema<any> = yup.object({
  // Example - require a string field
  name: yup.string().required(),

  // Example - make an optional number field with range
  qty: yup
    .number()
    .nullable()
    .min(1, 'Please select at least 1.')
    .max(8, 'You cannot select more than 8.'),

  // Example - require a valid email format
  email_address: yup
    .string()
    .email('Please enter a valid email address.')
    .required('You must enter an email address.'),

  // Example - limit field to specific values
  condition: yup.mixed<'allergies' | 'headache' | 'cold'>().nullable(),

  // Example - prevent user from entering more than 10 characters
  nickname: yup
    .string()
    .required()
    .max(10, 'You can not enter more than 10 characters.'),

  // Example - Require boolean field to be true (default is false)
  agree_to_conditions: yup
    .boolean()
    .nullable()
    .required()
    .oneOf([true], 'You must accept the terms and conditions.')
    .default(false),

  // Example - validate with regex
  password: yup
    .string()
    .required()
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[A-Z]+/, 'Must contain at least 1 uppercase letter.')
    .matches(/[a-z]+/, 'Must contain at least one lowercase letter')
    .matches(/[@$!%*#?&]+/, 'Must contain at least one special character.'),

  // Example - make sure field matches another field
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match.'),

  // Example - dynamically make required based on a field
  condition_notes: yup
    .string()
    .nullable()
    .when('condition', {
      is: 'allergies',
      then: (schema) => schema.required(),
    }),

  // Example - dynamically validate based on two fields
  allergy_details: yup
    .string()
    .nullable()
    .when(['condition', 'agree_to_conditions'], {
      is: (condition: string, agree_to_conditions: boolean) => {
        return condition == 'allergies' && agree_to_conditions === true;
      },
      then: (schema) => schema.required(),
    }),

  // Example - validate a complex object
  bank: yup
    .object({
      bank_code: yup
        .string()
        .required()
        .min(1, 'The minimum value you can enter is 1 digit')
        .max(4, 'The maximum value you can enter is 4 digits'),
      bank_name: yup.string().required().max(50, 'Enter up to 50 characters'),
    })
    .required()
    .typeError('Select a value.'),
});

// STEP 2: Create a type from the schema for use in your components
export type ExampleSchemaType = InferType<typeof ExampleSchema>;

// STEP 3: Import this resolver inside useForm resolver argument
export const ExampleResolver = yupResolver(ExampleSchema);
