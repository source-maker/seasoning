/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SignupService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Sign up API実装
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public signupCreate(
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/signup/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
