/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserItem } from './UserItem';

export type PaginatedUserItemList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<UserItem>;
};

