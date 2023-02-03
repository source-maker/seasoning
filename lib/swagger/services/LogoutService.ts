/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RefreshToken } from '../models/RefreshToken';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LogoutService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * ログアウトAPI
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public logoutCreate(
        requestBody: RefreshToken,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/logout/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
