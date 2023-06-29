/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

export type UserItem = {
    readonly id: number;
    item: number;
    readonly item_detail: Item;
    readonly receipt: string;
    quantity?: number;
    has_arrived?: boolean;
    ordered_at: string;
    readonly created_at: string;
    readonly updated_at: string;
};

