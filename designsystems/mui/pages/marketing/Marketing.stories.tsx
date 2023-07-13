import React from 'react';
import BrothCardExample from './BrothCardExample';
import BulletListExample from './BulletListExample';
import CtaLinkExample from './CtaLinkExample';
import { storyPageParameters } from '../../../../.storybook/storyPageParameters';

export default {
  title: 'MaterialUI/Pages/Marketing',
  component: CtaLinkExample,
  layout: 'fullscreen',
  parameters: storyPageParameters,
};

export const BrothCard = () => <BrothCardExample />;
export const CtaLink = () => <CtaLinkExample />;
export const BulletList = () => <BulletListExample />;
