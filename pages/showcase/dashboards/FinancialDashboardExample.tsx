import { NextPage } from 'next';
import { Box, Container, Grid, Stack } from '@mui/material';
import { useTheme } from '@mui/material';
import BrothDashboardPaper from '@/components/paper/BrothDashboardPaper';
import BrothLineChart from '@/components/chart/BrothLineChart';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { formatYen } from '@/services/helpers/textHelpers';
import faker from 'faker';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

/**
 * MONTH TRANSACTIONS TABLE
 */
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: false,
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'text',
    width: 110,
    editable: false,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    date: '2022/10/22',
    description: 'Dividend',
    type: 'Credit',
    amount: 32000,
  },
  {
    id: 2,
    date: '2022/10/22',
    description: 'Salary',
    type: 'Income',
    amount: 12129,
  },
  {
    id: 3,
    date: '2022/10/22',
    description: 'Auto Expense',
    type: 'Credit',
    amount: 52921,
  },
  {
    id: 4,
    date: '2022/10/22',
    description: 'Dividend',
    type: 'Credit',
    amount: 111,
  },
  {
    id: 5,
    date: '2022/10/22',
    description: 'Travel Expense',
    type: 'Credit',
    amount: 22222,
  },
  {
    id: 6,
    date: '2022/10/22',
    description: 'Reinbursement',
    type: 'Credit',
    amount: 33333,
  },
  {
    id: 7,
    date: '2022/10/22',
    description: 'Loan Payment',
    type: 'Credit',
    amount: 44444,
  },
  {
    id: 8,
    date: '2022/10/22',
    description: 'Company Dinner',
    type: 'Credit',
    amount: 55555,
  },
  {
    id: 9,
    date: '2022/10/22',
    description: 'Dividend',
    type: 'Credit',
    amount: 66666,
  },
];

/**
 * Configure Charts
 */

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const lineChartOptions = {
  responsive: true,
  scales: {
    x: {
      display: false, // hide or display x axis
    },
    y: {
      display: false, // hide or display y axis
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

const lineChartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      fill: {
        target: 'origin',
      },
      tension: 0.4, // determine level of smooth lines
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};

const FinancialDashboardExample: NextPage = () => {
  const isDark = useTheme().palette.mode === 'dark';

  return (
    <Box
      sx={{
        backgroundColor: !isDark ? 'grey.50' : '',
        minHeight: '100vh',
      }}
    >
      <Container sx={{ py: 4 }}>
        <Grid container spacing={2} columnSpacing={2} alignItems="stretch">
          <Grid item xs={12} sm={8}>
            <BrothTypography variant="h3" component="h1" baseline>
              Financial Overview
            </BrothTypography>
            <BrothTypography variant="body1">
              Welcome back, here are the details for your account this month.
            </BrothTypography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="right"></Grid>
          <Grid item xs={12} md={3}>
            <BrothDashboardPaper title="Income">
              <BrothTypography variant="h4" baseline>
                {formatYen(faker.datatype.number({ min: 300000, max: 999999 }))}
              </BrothTypography>
              <BrothTypography
                variant="body1"
                baseline
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <TrendingUpIcon sx={{ mr: 1 }} />
                +3.3% than last month
              </BrothTypography>
              <BrothLineChart options={lineChartOptions} data={lineChartData} />
            </BrothDashboardPaper>
          </Grid>
          <Grid item xs={12} md={3}>
            <BrothDashboardPaper title="Expenses">
              <BrothTypography variant="h4" baseline>
                {formatYen(faker.datatype.number({ min: 100000, max: 200000 }))}
              </BrothTypography>
              <BrothTypography
                variant="body1"
                baseline
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <TrendingDownIcon sx={{ mr: 1 }} /> -0.6% than last month
              </BrothTypography>
              <BrothLineChart options={lineChartOptions} data={lineChartData} />
            </BrothDashboardPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <BrothDashboardPaper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <BrothTypography variant="h6" baseline>
                  Current Balance (CC)
                </BrothTypography>
                <BrothTypography variant="h4" baseline>
                  {formatYen(
                    faker.datatype.number({ min: 900000, max: 9999999 })
                  )}
                </BrothTypography>
              </Box>
              <Stack
                spacing={2}
                alignItems="center"
                justifyContent="end"
                direction="row"
              >
                <CreditCardIcon fontSize="large" />
                <BrothTypography variant="body1" baseline>
                  **** **** **** 1234
                </BrothTypography>
              </Stack>
              <Stack direction="row" display="flex" spacing={2}>
                <Box>
                  <BrothTypography variant="h6" baseline>
                    Card Holder
                  </BrothTypography>
                  <BrothTypography variant="body1" baseline>
                    Jane Doe
                  </BrothTypography>
                </Box>
                <Box>
                  <BrothTypography variant="h6" baseline>
                    Valid Dates
                  </BrothTypography>
                  <BrothTypography variant="body1" baseline>
                    3/23
                  </BrothTypography>
                </Box>
              </Stack>
            </BrothDashboardPaper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack spacing={2}>
              <BrothDashboardPaper
                title="This Month's Transactions"
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                  density="compact"
                  sx={{ minHeight: 300 }}
                />
              </BrothDashboardPaper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default FinancialDashboardExample;
