/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

export type PaginatedItemList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Item>;
};

