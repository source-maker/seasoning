import React from 'react';
import CardListExample from './SocialFeedExample';
import DataTableExample from './DataTableExample';
import ImageFeedExample from './ImageFeedExample';
import ActivityFeedExample from './ActivityFeedExample';
import ProjectsFeedExample from './ProjectsFeedExample';
import PaginationBasicExample from './PaginationBasicExample';
import { storyPageParameters } from '../../../../.storybook/storyPageParameters';

export default {
  title: 'MaterialUI/Pages/Lists',
  layout: 'fullscreen',
  parameters: storyPageParameters,
};

export const DatatableBasic = () => <DataTableExample />;
export const PaginationBasic = () => <PaginationBasicExample />;
export const ActivityFeed = () => <ActivityFeedExample />;
export const ProjectsFeed = () => <ProjectsFeedExample />;
export const SocialFeed = () => <CardListExample />;
export const ImageFeed = () => <ImageFeedExample />;
