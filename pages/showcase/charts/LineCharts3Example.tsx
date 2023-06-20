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
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

type ChartData = {
  date: string;
  [key: string]: number | string;
};

type SelectedPointType = {
  stroke: string;
  strokeWidth: number;
  fill: string;
  dataKey: string;
  name: string;
  color: string;
  value: number;
  payload: {
    date: string;
    developer: string;
    merges: number;
  };
};

export default function LineCharts3Example() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<SelectedPointType[]>([]);

  useEffect(() => {
    const data = [
      { developer: '山田 太郎', date: '2023-06-06', merges: 3 },
      { developer: '山田 太郎', date: '2023-06-07', merges: 5 },
      { developer: '山田 太郎', date: '2023-06-08', merges: 2 },
      { developer: '山田 太郎', date: '2023-06-09', merges: 4 },
      { developer: '山田 太郎', date: '2023-06-10', merges: 1 },
      { developer: '鈴木 花子', date: '2023-06-12', merges: 4 },
      { developer: '鈴木 花子', date: '2023-06-07', merges: 3 },
      { developer: '鈴木 花子', date: '2023-06-08', merges: 6 },
      { developer: '鈴木 花子', date: '2023-06-09', merges: 2 },
      { developer: '鈴木 花子', date: '2023-06-10', merges: 3 },
      { developer: '田中 一郎', date: '2023-06-06', merges: 2 },
      { developer: '田中 一郎', date: '2023-06-07', merges: 4 },
      { developer: '田中 一郎', date: '2023-06-08', merges: 5 },
      { developer: '田中 一郎', date: '2023-06-09', merges: 1 },
      { developer: '田中 一郎', date: '2023-06-10', merges: 3 },
    ];

    const developers = ['山田 太郎', '鈴木 花子', '田中 一郎'];

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

  const handleClick = (data) => {
    console.log(`selected:`, data?.activePayload);
    console.log('chartdata:', chartData);
    setSelectedPoint(data?.activePayload);
  };

  return (
    <>
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
          <Line type="monotone" dataKey="山田 太郎" stroke="tomato" />
          <Line type="monotone" dataKey="鈴木 花子" stroke="purple" />
          <Line type="monotone" dataKey="田中 一郎" stroke="gold" />
        </LineChart>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Merges</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chartData.map((chartDataPoint, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: selectedPoint?.some(
                    (selected) =>
                      selected?.payload?.date === chartDataPoint.date
                  )
                    ? 'lightcyan'
                    : 'white',
                }}
              >
                <TableCell>
                  Selected:{JSON.stringify(selectedPoint[0], null, 2)}
                </TableCell>
                <TableCell>
                  Datapoint:{JSON.stringify(chartDataPoint, null, 2)}
                </TableCell>
                <TableCell>{chartDataPoint.merges}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
