import HeroCentered from 'src/pages/showcase/heroes/HeroCentered';
import HeroSignup from 'src/pages/showcase/heroes/HeroSignup';
import HeroVisual from 'src/pages/showcase/heroes/HeroVisual';
import { showcaseParameters } from './showcaseParameters';

export default {
  title: 'Showcase/Heroes',
  component: HeroCentered,
  layout: 'fullscreen',
  parameters: showcaseParameters,
};

export const CenteredHero = () => <HeroCentered />;
export const VisualHero = () => <HeroVisual />;
export const SignupHero = () => <HeroSignup />;
