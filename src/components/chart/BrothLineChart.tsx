import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { alpha, useTheme } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface IBrothLineChartProps {
  options: ChartOptions<'line'>;
  data: ChartData<'line'>;
}

export default function BrothLineChart(props: IBrothLineChartProps) {
  const primaryColor = useTheme().palette.primary.main;

  return (
    <Line
      options={{
        borderColor: primaryColor,
        backgroundColor: alpha(primaryColor, 0.16),
        ...props.options,
      }}
      data={props.data}
    />
  );
}
