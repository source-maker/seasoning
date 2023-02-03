/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginTokenObtain } from '../models/LoginTokenObtain';
import type { LoginTokenResponse } from '../models/LoginTokenResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoginService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * ログインAPI
     * @param requestBody
     * @returns LoginTokenResponse OK
     * @throws ApiError
     */
    public loginCreate(
        requestBody: LoginTokenObtain,
    ): CancelablePromise<LoginTokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/login/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
