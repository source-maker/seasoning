import * as React from 'react';

import { ComponentStory } from '@storybook/react';
import { CollapsibleTable, IHeader } from './CollapsibleTable';
import { Box } from '@mui/material';

export default {
  title: 'MaterialUI/Components/CollapsibleTable',
  component: CollapsibleTable,
};

const Template: ComponentStory<typeof CollapsibleTable> = (args) => {
  return <CollapsibleTable {...args} />;
};

interface SampleRow {
  id: number;
  lastName: string;
  firstName: string | null;
  age: number | null;
}

const headers: IHeader[] = [
  { field: 'id', title: 'ID' },
  { field: 'firstName', title: 'First name' },
  { field: 'lastName', title: 'Last name' },
  {
    field: 'age',
    title: 'Age',
    align: 'left',
  },
  {
    field: 'fullName',
    title: 'Full name',
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function CollapseInnerComponent({ rowData }: { rowData: SampleRow }) {
  return <Box>test {rowData.id}</Box>;
}

export const Playground = Template.bind({});
Playground.args = {
  headers: headers,
  rows: rows,
  CollapseInnerComponent,
  size: 'small',
};
