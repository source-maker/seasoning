import FinancialDashboardExample from 'src/pages/showcase/dashboards/FinancialDashboardExample';
import { showcaseParameters } from './showcaseParameters';

export default {
  title: 'Showcase/Dashboards',
  component: FinancialDashboardExample,
  layout: 'fullscreen',
  parameters: showcaseParameters,
};

export const FinancialDashboard = () => <FinancialDashboardExample />;
