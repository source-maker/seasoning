import AddressFormExample from 'pages/showcase/forms/AddressFormExample';
import MultiStepFormExample from 'pages/showcase/forms/MultiStepFormExample';
import ValidatedFormExample from 'pages/showcase/forms/ValidatedFormExample';
import ImageUploadFormExample from 'pages/showcase/forms/ImageUploadFormExample';
import MultipleImageFormExample from 'pages/showcase/forms/MultipleImageFormExample';
import { showcaseParameters } from './showcaseParameters';

export default {
  title: 'Showcase/Forms',
  component: ValidatedFormExample,
  layout: 'fullscreen',
  parameters: showcaseParameters,
};

export const ValidatedForm = () => <ValidatedFormExample />;
export const AddressForm = () => <AddressFormExample />;
export const MultistepForm = () => <MultiStepFormExample />;
export const ProfileUploadForm = () => <ImageUploadFormExample />;
export const MultipleImageForm = () => <MultipleImageFormExample />;
