import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { formatIsoDate } from '@/helpers/dateHelpers';
import { Box } from '@mui/material';

export default function LineCharts2Example() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = [
      { developer: 'Dev1', date: '2023-06-06', merges: 3 },
      { developer: 'Dev1', date: '2023-06-07', merges: 5 },
      { developer: 'Dev1', date: '2023-06-08', merges: 2 },
      { developer: 'Dev1', date: '2023-06-09', merges: 4 },
      { developer: 'Dev1', date: '2023-06-10', merges: 1 },
      { developer: 'Dev2', date: '2023-06-06', merges: 4 },
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

    const dev1Data = data
      .filter((item) => item.developer === 'Dev1')
      .map((item) => item.merges);
    const dev2Data = data
      .filter((item) => item.developer === 'Dev2')
      .map((item) => item.merges);
    const dev3Data = data
      .filter((item) => item.developer === 'Dev3')
      .map((item) => item.merges);

    const lineStyle = {
      tension: 0.1,
      fill: false,
    };

    setChartData({
      labels: data
        .filter((item) => item.developer === 'Dev1')
        .map((item) => formatIsoDate(new Date(item.date))),
      datasets: [
        {
          ...lineStyle,
          label: 'Dev1',
          data: dev1Data,
          borderColor: 'tomato',
        },
        {
          ...lineStyle,
          label: 'Dev2',
          data: dev2Data,
          borderColor: 'purple',
        },
        {
          ...lineStyle,
          label: 'Dev3',
          data: dev3Data,
          borderColor: 'gold',
        },
      ],
    });
  }, []);

  const chartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const chartElement = elements[0];
        console.log(chartElement);
        // const index = chartElement.index;
        // const datasetIndex = chartElement.datasetIndex;
        // const chart = chartElement.chart;
        // if (!chart) return;
        // const label = chart?.data.labels[index];
        // const value = chart?.data.datasets[datasetIndex].data[index];
        // const developer = chart?.data.datasets[datasetIndex].label;
        // console.log(`Clicked on ${developer} with ${value} merges on ${label}`);
      }
    },
  };

  return (
    <Box sx={{ width: '800px', mx: 'auto' }}>
      <Line data={chartData} options={chartOptions} />
    </Box>
  );
}
