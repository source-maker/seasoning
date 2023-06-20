import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

type ChartData = {
  date: string;
  Dev1?: number;
  Dev2?: number;
  Dev3?: number;
};

export default function LineCharts3Example() {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const data = [
      { developer: 'Dev1', date: '2023-06-06', merges: 3 },
      { developer: 'Dev1', date: '2023-06-07', merges: 5 },
      { developer: 'Dev1', date: '2023-06-08', merges: 2 },
      { developer: 'Dev1', date: '2023-06-09', merges: 4 },
      { developer: 'Dev1', date: '2023-06-10', merges: 1 },
      { developer: 'Dev2', date: '2023-06-12', merges: 4 },
      { developer: 'Dev2', date: '2023-06-07', merges: 3 },
      { developer: 'Dev2', date: '2023-06-08', merges: 6 },
      { developer: 'Dev2', date: '2023-06-09', merges: 2 },
      { developer: 'Dev2', date: '2023-06-10', merges: 3 },
      { developer: 'Dev3', date: '2023-06-06', merges: 2 },
      { developer: 'Dev3', date: '2023-06-07', merges: 4 },
      { developer: 'Dev3', date: '2023-06-08', merges: 5 },
      { developer: 'Dev3', date: '2023-06-09', merges: 1 },
      { developer: 'Dev3', date: '2023-06-10', merges: 3 },
    ];

    const developers = ['Dev1', 'Dev2', 'Dev3'];
    const chartData = data
      .filter((item) => developers.includes(item.developer))
      .map((item) => ({
        date: item.date,
        [item.developer]: item.merges,
      }));

    const formattedChartData: ChartData[] = Array.from(
      chartData
        .reduce(
          (map, item) => map.set(item.date, { ...map.get(item.date), ...item }),
          new Map()
        )
        .values()
    );

    setChartData(formattedChartData);
  }, []);

  const handleClick = (data, index) => {
    console.log('You clicked on', data);
  };

  return (
    <Box sx={{ width: '800px', mx: 'auto' }}>
      <LineChart
        width={800}
        height={400}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        onClick={handleClick}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Dev1" stroke="tomato" />
        <Line type="monotone" dataKey="Dev2" stroke="purple" />
        <Line type="monotone" dataKey="Dev3" stroke="gold" />
      </LineChart>
    </Box>
  );
}
