import CardListExample from 'src/pages/showcase/lists/SocialFeedExample';
import DataTableExample from 'src/pages/showcase/lists/DataTableExample';
import ImageFeedExample from 'src/pages/showcase/lists/ImageFeedExample';
import ActivityFeedExample from 'src/pages/showcase/lists/ActivityFeedExample';
import ProjectsFeedExample from 'src/pages/showcase/lists/ProjectsFeedExample';
import { showcaseParameters } from './showcaseParameters';
import PaginationBasicExample from 'src/pages/showcase/lists/PaginationBasicExample';

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
