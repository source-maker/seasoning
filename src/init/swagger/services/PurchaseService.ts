/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserItemList } from '../models/PaginatedUserItemList';
import type { UserItem } from '../models/UserItem';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param page A page number within the paginated result set.
     * @param size Number of results to return per page.
     * @returns PaginatedUserItemList
     * @throws ApiError
     */
    public purchaseList(
        page?: number,
        size?: number,
    ): CancelablePromise<PaginatedUserItemList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/purchase/',
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * @param requestBody
     * @returns UserItem
     * @throws ApiError
     */
    public purchaseCreate(
        requestBody: UserItem,
    ): CancelablePromise<UserItem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/purchase/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
