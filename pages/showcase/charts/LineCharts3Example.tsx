import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import { Box, Container, TextField as MuiTextField } from '@mui/material';
import { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { BrothButton } from '@/components/button/BrothButton';
import { Stack } from '@mui/system';

type ChartData = {
  date: string;
  note?: string;
  merges?: number;
  [key: string]: string | number | undefined;
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
    note?: string;
    developer: string;
    merges: number;
  };
};

export default function LineCharts3Example() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<SelectedPointType[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [noteText, setNoteText] = useState<string>('');

  useEffect(() => {
    // TODO: django apiからデータを取得する
    const data = [
      { developer: '山田 太郎', date: '2023-06-06', merges: 3, note: 'test' },
      { developer: '山田 太郎', date: '2023-06-07', merges: 5, note: '' },
      { developer: '山田 太郎', date: '2023-06-08', merges: 2, note: 'test2' },
      { developer: '山田 太郎', date: '2023-06-09', merges: 4, note: '' },
      { developer: '山田 太郎', date: '2023-06-10', merges: 1, note: '' },
      { developer: '鈴木 花子', date: '2023-06-12', merges: 4, note: '' },
      { developer: '鈴木 花子', date: '2023-06-07', merges: 3, note: '' },
      { developer: '鈴木 花子', date: '2023-06-08', merges: 6, note: 'test3' },
      { developer: '鈴木 花子', date: '2023-06-09', merges: 2, note: '' },
      { developer: '鈴木 花子', date: '2023-06-10', merges: 3, note: '' },
      { developer: '田中 一郎', date: '2023-06-06', merges: 2, note: '' },
      { developer: '田中 一郎', date: '2023-06-07', merges: 4, note: '' },
      { developer: '田中 一郎', date: '2023-06-08', merges: 5, note: '' },
      { developer: '田中 一郎', date: '2023-06-09', merges: 1, note: '' },
      { developer: '田中 一郎', date: '2023-06-10', merges: 3, note: '' },
    ];

    const developers = ['山田 太郎', '鈴木 花子', '田中 一郎'];

    const chartData = data
      .filter((item) => developers.includes(item.developer))
      .map((item) => ({
        date: item.date,
        note: item.note,

        [item.developer]: item.merges,
      }));

    const formattedChartData: ChartData[] = Array.from(
      chartData
        .reduce((map, item) => {
          const existingItem = map.get(item.date);
          return map.set(item.date, {
            ...existingItem,
            ...item,
            note: existingItem?.note
              ? item.note
                ? existingItem.note + ' ' + item.note
                : existingItem.note
              : item.note,
          });
        }, new Map())
        .values()
    );

    setChartData(formattedChartData);
  }, []);

  const handleClick = (data) => {
    console.log(`selected:`, data?.activePayload);
    console.log('chartdata:', chartData);
    setSelectedPoint(data?.activePayload);
  };

  const handleNoteSave = (date: string, note: string) => {
    setChartData(
      chartData.map((item) =>
        item.date === date ? { ...item, note: note } : item
      )
    );
    setEditing(null);
  };

  function convertDataFormat(oldFormatData: ChartData) {
    const newEntry: {
      date: string;
      note?: string;
      data: { name: string; merges: number }[];
    } = { date: oldFormatData.date, note: oldFormatData.note, data: [] };

    Object.keys(oldFormatData).forEach((key) => {
      if (
        key !== 'date' &&
        key !== 'note' &&
        typeof oldFormatData[key] === 'number'
      ) {
        newEntry.data.push({ name: key, merges: oldFormatData[key] as number });
      }
    });

    return newEntry;
  }

  return (
    <Container sx={{ my: 5 }}>
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
              <TableCell>Merges</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chartData.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: selectedPoint?.some(
                    (selected) => selected?.payload?.date === row.date
                  )
                    ? 'lightcyan'
                    : 'white',
                }}
              >
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  {convertDataFormat(row).data.map((dev) => (
                    <div key={dev.name}>
                      {dev.name}: {dev.merges}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {editing === row.date ? (
                    <Stack direction={'column'}>
                      <MuiTextField
                        rows={4}
                        multiline
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                      />
                      <BrothButton
                        onClick={() => handleNoteSave(row.date, noteText)}
                      >
                        Save
                      </BrothButton>
                    </Stack>
                  ) : (
                    <>
                      <div>{row.note}</div>
                      <BrothButton
                        onClick={() => {
                          setEditing(row.date);
                          setNoteText(row?.note || '');
                        }}
                      >
                        Edit
                      </BrothButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
