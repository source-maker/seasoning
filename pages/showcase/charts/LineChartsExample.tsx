import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  VictoryVoronoiContainer,
} from 'victory';

export default function LineChartsExample() {
  const data = [
    { developer: 'Dev1', date: '2023-06-06', merges: 3 },
    { developer: 'Dev1', date: '2023-06-07', merges: 5 },
    { developer: 'Dev1', date: '2023-06-08', merges: 2 },
    { developer: 'Dev1', date: '2023-06-09', merges: 4 },
    { developer: 'Dev1', date: '2023-06-10', merges: 1 },
    {
      developer: 'Dev1',
      date: '2023-06-11',
      merges: 3,
    },
    {
      developer: 'Dev1',
      date: '2023-06-12',
      merges: 5,
    },
    {
      developer: 'Dev1',
      date: '2023-06-13',
      merges: 3,
    },
    {
      developer: 'Dev1',
      date: '2023-06-14',
      merges: 4,
    },
    {
      developer: 'Dev1',
      date: '2023-06-15',
      merges: 3,
    },

    { developer: 'Dev2', date: '2023-06-06', merges: 4 },
    { developer: 'Dev2', date: '2023-06-07', merges: 3 },
    { developer: 'Dev2', date: '2023-06-08', merges: 6 },
    { developer: 'Dev2', date: '2023-06-09', merges: 2 },
    { developer: 'Dev2', date: '2023-06-10', merges: 3 },
    {
      developer: 'Dev2',
      date: '2023-06-11',
      merges: 2,
    },
    {
      developer: 'Dev2',
      date: '2023-06-12',
      merges: 6,
    },
    {
      developer: 'Dev2',
      date: '2023-06-13',
      merges: 2,
    },
    {
      developer: 'Dev2',
      date: '2023-06-14',
      merges: 6,
    },
    {
      developer: 'Dev2',
      date: '2023-06-15',
      merges: 2,
    },

    { developer: 'Dev3', date: '2023-06-06', merges: 2 },
    { developer: 'Dev3', date: '2023-06-07', merges: 4 },
    { developer: 'Dev3', date: '2023-06-08', merges: 5 },
    { developer: 'Dev3', date: '2023-06-09', merges: 1 },
    { developer: 'Dev3', date: '2023-06-10', merges: 3 },
    {
      developer: 'Dev3',
      date: '2023-06-11',
      merges: 3,
    },
    {
      developer: 'Dev3',
      date: '2023-06-12',
      merges: 5,
    },
    {
      developer: 'Dev3',
      date: '2023-06-13',
      merges: 3,
    },
  ];

  const handleClick = ({ datum }) => {
    alert(
      `Clicked on ${datum.developer} with ${datum.merges} merges on ${datum.date}`
    );
  };

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      scale={{ x: 'linear', y: 'linear' }}
      height={220}
      containerComponent={<VictoryVoronoiContainer />}
      animate={{
        duration: 1500,
        onLoad: { duration: 1000 },
      }}
    >
      <VictoryLine
        data={data.filter((d) => d.developer === 'Dev1')}
        style={{
          data: { stroke: '#c43a31' },
          parent: { border: '1px solid #ccc' },
        }}
        x="date"
        y="merges"
        labels={({ datum }) => `${datum.merges}`}
        labelComponent={<VictoryLabel />}
        events={[
          {
            target: 'labels',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'labels',
                    mutation: (props) => {
                      handleClick(props);
                      return null;
                    },
                  },
                ];
              },
            },
          },
        ]}
      />

      <VictoryLine
        data={data.filter((d) => d.developer === 'Dev2')}
        x="date"
        y="merges"
        labels={({ datum }) => `${datum.merges}`}
        labelComponent={<VictoryLabel />}
        events={[
          {
            target: 'labels',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'labels',
                    mutation: (props) => {
                      alert(
                        `Clicked on ${props.datum.developer} with ${props.datum.merges} merges on ${props.datum.date}`
                      );
                      return null;
                    },
                  },
                ];
              },
            },
          },
        ]}
        style={{
          data: { stroke: 'purple' },
        }}
      />

      <VictoryLine
        data={data.filter((d) => d.developer === 'Dev3')}
        x="date"
        y="merges"
        labels={({ datum }) => `${datum.merges}`}
        labelComponent={<VictoryLabel />}
        events={[
          {
            target: 'labels',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'labels',
                    mutation: (props) => {
                      alert(
                        `Clicked on ${props.datum.developer} with ${props.datum.merges} merges on ${props.datum.date}`
                      );
                      return null;
                    },
                  },
                ];
              },
            },
          },
        ]}
        style={{
          data: { stroke: 'gold' },
        }}
      />
    </VictoryChart>
  );
}
