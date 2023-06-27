/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserItem } from './UserItem';

export type PatchedUser = {
    readonly id?: number;
    name?: string;
    readonly items?: Array<UserItem>;
    money?: number;
    readonly created_at?: string;
    readonly updated_at?: string;
    password?: string | null;
};

