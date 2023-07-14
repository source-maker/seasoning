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
import { MuiButton } from '@/components/button/MuiButton';
import { Stack } from '@mui/system';
import { Octokit } from 'octokit';
import { format } from 'date-fns';
import { formatIsoDate } from '@/helpers/dateHelpers';
import { MuiTypography } from '@/components/typography/MuiTypography';

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
const colorList = [
  'Red',
  'Blue',
  'Purple',
  'Green',
  'Aqua',
  'Maroon',
  'Orange',
  'Fuchsia',
  'Lime',
  'Teal',
  'Olive',
];

export default function LineCharts3Example() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<SelectedPointType[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [noteText, setNoteText] = useState<string>('');
  const [developers, setDevelopers] = useState<Set<string>>(new Set());
  const [owner, setOwner] = useState<string>(
    process.env.NEXT_PUBLIC_GITHUB_DEMO_OWNER || ''
  );
  const [repo, setRepo] = useState<string>(
    process.env.NEXT_PUBLIC_GITHUB_DEMO_REPO || ''
  );

  useEffect(() => {
    async function getPR() {
      try {
        const octokit = new Octokit({
          auth: process.env.NEXT_PUBLIC_GITHUB_PERSONAL_KEY,
        });
        const {
          data: { login },
        } = await octokit.rest.users.getAuthenticated();
        console.log('Github Account: %s', login);

        // Fetch PRs from a specific repository
        const { data: prData } = await octokit?.rest?.pulls?.list({
          owner: owner,
          repo: repo,
          state: 'all',
        });

        console.log('Pull Requests:', prData);

        //  get all unique developer names.
        const developers = new Set(
          prData.map((item) => item?.user?.login || '')
        );
        console.log('developers:', developers);
        setDevelopers(developers);

        // Prepare line chart data and consolidate all operations into a single reduce function
        const consolidatedChartData: ChartData[] = Array.from(
          prData
            .reduce((map, item) => {
              // Normalize the date to the day
              const date = item.closed_at
                ? new Date(item.closed_at)
                : new Date();
              const normalizedDate = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).toISOString();

              const description = item.body;
              const note = '';
              const developer = item?.user?.login || '';
              const merges = item.merged_at ? 1 : 0;

              const existingItem = map.get(normalizedDate);
              const existingMerges = existingItem
                ? existingItem[developer] || 0
                : 0;

              // Concatenate descriptions for the same date
              const concatenatedDescription =
                existingItem?.description && description
                  ? `${existingItem.description}\n${description}`
                  : description;

              // Ensure each data point has a value for each developer.
              const dataPoint = {
                ...Array.from(developers).reduce(
                  (obj, developer) => ({ ...obj, [developer]: 0 }),
                  {}
                ),
                ...existingItem,
                date: normalizedDate,
                note,
                description: concatenatedDescription,
                [developer]: existingMerges + merges,
              };

              return map.set(normalizedDate, dataPoint);
            }, new Map())
            .values()
        );

        // Sort chart data by date
        const sortedChartData = consolidatedChartData.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        console.log('Consolidated Chart Data:', consolidatedChartData);

        setChartData(sortedChartData);
      } catch (error) {}
    }

    getPR();
  }, [owner, repo]);

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
      description?: string; // Added description field
      data: { name: string; merges: number }[];
    } = {
      date: oldFormatData.date,
      note: oldFormatData.note,
      description: oldFormatData.description,
      data: [],
    };

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
      <Box sx={{ mb: 5 }}>
        <MuiTypography variant="h4" baseline>
          Pull Request History
        </MuiTypography>
        <MuiTypography>
          Instructions: Set an environment variable
          `NEXT_PUBLIC_GITHUB_PERSONAL_KEY` with a Github personal access token.
          <br />
          Enter the owner and repo of a Github repository your account has
          access to to see the pull request history.
        </MuiTypography>
        <Stack spacing={2} direction={'row'}>
          <MuiTextField
            label="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <MuiTextField
            label="Repo"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
          />
        </Stack>
      </Box>
      <Box sx={{ width: '800px', mx: 'auto' }}>
        <LineChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          onClick={handleClick}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(str) => format(new Date(str), 'yyyy/MM/dd')}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {Array.from(developers).map((developer, i) => (
            <Line
              type="monotone"
              dataKey={developer}
              stroke={colorList[i % colorList.length]}
              key={developer}
            />
          ))}
        </LineChart>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Merges</TableCell>
              <TableCell>Description</TableCell>
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
                <TableCell>{formatIsoDate(row.date)}</TableCell>
                <TableCell>
                  {convertDataFormat(row).data.map((dev) => (
                    <div key={dev.name}>
                      {dev.name}: {dev.merges}
                    </div>
                  ))}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  {editing === row.date ? (
                    <Stack direction={'column'}>
                      <MuiTextField
                        rows={4}
                        multiline
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                      />
                      <MuiButton
                        onClick={() => handleNoteSave(row.date, noteText)}
                      >
                        Save
                      </MuiButton>
                    </Stack>
                  ) : (
                    <>
                      <div>{row.note}</div>
                      <MuiButton
                        onClick={() => {
                          setEditing(row.date);
                          setNoteText(row?.note || '');
                        }}
                      >
                        Edit
                      </MuiButton>
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
