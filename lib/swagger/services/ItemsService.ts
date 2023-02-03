/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from '../models/Item';
import type { PaginatedItemList } from '../models/PaginatedItemList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ItemsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedItemList
     * @throws ApiError
     */
    public itemsList(
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedItemList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/items/',
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * @param id
     * @returns Item
     * @throws ApiError
     */
    public itemsRetrieve(
        id: number,
    ): CancelablePromise<Item> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/items/{id}',
            path: {
                'id': id,
            },
        });
    }

}
