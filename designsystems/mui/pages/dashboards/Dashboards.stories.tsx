import React from 'react';
import FinancialDashboardExample from './FinancialDashboardExample';
import { storyPageParameters } from '../../../../.storybook/storyPageParameters';

export default {
  title: 'MaterialUI/Pages/Dashboards',
  component: FinancialDashboardExample,
  layout: 'fullscreen',
  parameters: storyPageParameters,
};

export const FinancialDashboard = () => <FinancialDashboardExample />;
