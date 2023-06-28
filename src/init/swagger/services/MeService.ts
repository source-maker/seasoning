/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchedUser } from '../models/PatchedUser';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns User
     * @throws ApiError
     */
    public meRetrieve(): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/me/',
        });
    }

    /**
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public meUpdate(
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/me/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public mePartialUpdate(
        requestBody?: PatchedUser,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/me/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
