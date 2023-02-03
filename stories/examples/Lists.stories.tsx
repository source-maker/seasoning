import CardListExample from 'pages/showcase/lists/SocialFeedExample';
import DataTableExample from 'pages/showcase/lists/DataTableExample';
import ImageFeedExample from 'pages/showcase/lists/ImageFeedExample';
import ActivityFeedExample from 'pages/showcase/lists/ActivityFeedExample';
import ProjectsFeedExample from 'pages/showcase/lists/ProjectsFeedExample';
import { showcaseParameters } from './showcaseParameters';
import PaginationBasicExample from 'pages/showcase/lists/PaginationBasicExample';

export default {
  title: 'Showcase/Lists',
  layout: 'fullscreen',
  parameters: showcaseParameters,
};

export const DatatableBasic = () => <DataTableExample />;
export const PaginationBasic = () => <PaginationBasicExample />;
export const ActivityFeed = () => <ActivityFeedExample />;
export const ProjectsFeed = () => <ProjectsFeedExample />;
export const SocialFeed = () => <CardListExample />;
export const ImageFeed = () => <ImageFeedExample />;
