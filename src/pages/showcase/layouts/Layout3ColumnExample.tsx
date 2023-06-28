import { getLayout } from '@/components/layout/Layout3Column';
import { NextPage } from 'next';

const Layout3ColumnExample: NextPage = ({}) => {
  return <div>Main content goes here</div>;
};

export default getLayout(Layout3ColumnExample, {
  title: 'Layout3ColumnExample',
  leftSidebar: <div>leftSidebar</div>,
  rightSidebar: <div>rightSidebar</div>,
});
