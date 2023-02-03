import BrothCardExample from 'pages/showcase/marketing/BrothCardExample';
import BulletListExample from 'pages/showcase/marketing/BulletListExample';
import CtaLinkExample from 'pages/showcase/marketing/CtaLinkExample';
import { showcaseParameters } from './showcaseParameters';

export default {
  title: 'Showcase/Marketing',
  component: CtaLinkExample,
  layout: 'fullscreen',
  parameters: showcaseParameters,
};

export const BrothCard = () => <BrothCardExample />;
export const CtaLink = () => <CtaLinkExample />;
export const BulletList = () => <BulletListExample />;
