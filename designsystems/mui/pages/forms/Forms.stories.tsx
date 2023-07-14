import React from 'react';
import AddressFormExample from './AddressFormExample';
import MultiStepFormExample from './MultiStepFormExample';
import ValidatedFormExample from './ValidatedFormExample';
import ImageUploadFormExample from './ImageUploadFormExample';
import MultipleImageFormExample from './MultipleImageFormExample';
import { storyPageParameters } from '../../../../.storybook/storyPageParameters';

export default {
  title: 'MaterialUI/Pages/Forms',
  component: ValidatedFormExample,
  layout: 'fullscreen',
  parameters: storyPageParameters,
};

export const ValidatedForm = () => <ValidatedFormExample />;
export const AddressForm = () => <AddressFormExample />;
export const MultistepForm = () => <MultiStepFormExample />;
export const ProfileUploadForm = () => <ImageUploadFormExample />;
export const MultipleImageForm = () => <MultipleImageFormExample />;
