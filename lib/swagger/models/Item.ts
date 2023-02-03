/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryEnum } from './CategoryEnum';

export type Item = {
    readonly id: number;
    name: string;
    unit_price?: number;
    category: CategoryEnum;
    readonly created_at: string;
    readonly updated_at: string;
};

