import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

/**
 * Storybook Decorator for React Hook Form (RHF)
 * @param {*} Story
 * @param {*} context
 * @returns
 */
export const withRHF = (Story, context) => {
  const methods = useForm({
    defaultValues: context.args,
  });
  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};
