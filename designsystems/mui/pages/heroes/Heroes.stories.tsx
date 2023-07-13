import React from 'react';
import HeroCentered from './HeroCentered';
import HeroSignup from './HeroSignup';
import HeroVisual from './HeroVisual';
import { storyPageParameters } from '../../../../.storybook/storyPageParameters';

export default {
  title: 'MaterialUI/Pages/Heroes',
  component: HeroCentered,
  layout: 'fullscreen',
  parameters: storyPageParameters,
};

export const CenteredHero = () => <HeroCentered />;
export const VisualHero = () => <HeroVisual />;
export const SignupHero = () => <HeroSignup />;
