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
import { Octokit } from 'octokit';

type ChartData = {
  date: string;
  note?: string;
  description?: string;
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
    async function getPR() {
      const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_PERSONAL_KEY,
      });

      const {
        data: { login },
      } = await octokit.rest.users.getAuthenticated();
      console.log('Github Account: %s', login);

      // Fetch PRs from a specific repository
      const { data: prData } = await octokit.rest.pulls.list({
        owner: process.env.NEXT_PUBLIC_GITHUB_DEMO_OWNER || '',
        repo: process.env.NEXT_PUBLIC_GITHUB_DEMO_REPO || '',
        state: 'all',
      });

      console.log('Pull Requests:', prData);

      // First pass: get all unique developer names.
      const developers = new Set(prData.map((item) => item?.user?.login || ''));

      // Prepare line chart data and consolidate all operations into a single reduce function
      const consolidatedChartData: ChartData[] = Array.from(
        prData
          .reduce((map, item) => {
            const date = item.closed_at;
            const description = item.body;
            const note = '';
            const developer = item?.user?.login || '';
            const merges = item.merged_at ? 1 : 0;

            const existingItem = map.get(date);
            const existingMerges = existingItem
              ? existingItem[developer] || 0
              : 0;

            // Ensure each data point has a value for each developer.
            const dataPoint = {
              ...Array.from(developers).reduce(
                (obj, developer) => ({ ...obj, [developer]: 0 }),
                {}
              ),
              ...existingItem,
              date,
              note,
              description,
              [developer]: existingMerges + merges,
            };

            return map.set(date, dataPoint);
          }, new Map())
          .values()
      );

      console.log('Consolidated Chart Data:', consolidatedChartData);

      setChartData(consolidatedChartData);
    }

    getPR();
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

  // convert chart data into format that can be used by line chart
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
        key !== 'description' &&
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
          <Line
            type="monotone"
            dataKey={'david-mambou'}
            stroke={'red'}
            key={'david-mambou'}
          />
          <Line
            type="monotone"
            dataKey={'alvara'}
            stroke={'yellow'}
            key={'alvara'}
          />
          <Line
            type="monotone"
            dataKey={'mickubota'}
            stroke={'green'}
            key={'mickubota'}
          />
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
