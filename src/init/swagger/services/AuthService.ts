/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginTokenObtain } from '../models/LoginTokenObtain';
import type { LoginTokenResponse } from '../models/LoginTokenResponse';
import type { ProviderAuth } from '../models/ProviderAuth';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { TokenVerify } from '../models/TokenVerify';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * ログインAPI
     * @param requestBody
     * @returns LoginTokenResponse OK
     * @throws ApiError
     */
    public authJwtCreateCreate(
        requestBody: LoginTokenObtain,
    ): CancelablePromise<LoginTokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/jwt/create/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     * @param requestBody
     * @returns TokenRefresh
     * @throws ApiError
     */
    public authJwtRefreshCreate(
        requestBody: TokenRefresh,
    ): CancelablePromise<TokenRefresh> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/jwt/refresh/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Takes a token and indicates if it is valid.  This view provides no
     * information about a token's fitness for a particular use.
     * @param requestBody
     * @returns TokenVerify
     * @throws ApiError
     */
    public authJwtVerifyCreate(
        requestBody: TokenVerify,
    ): CancelablePromise<TokenVerify> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/jwt/verify/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * OAuthログインAPI
     * @param provider
     * @param redirectUri リダイレクトURI
     * @returns ProviderAuth
     * @throws ApiError
     */
    public authORetrieve(
        provider: string,
        redirectUri?: string,
    ): CancelablePromise<ProviderAuth> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auth/o/{provider}/',
            path: {
                'provider': provider,
            },
            query: {
                'redirect_uri': redirectUri,
            },
        });
    }

    /**
     * OAuthログインAPI
     * @param provider
     * @param requestBody
     * @returns ProviderAuth
     * @throws ApiError
     */
    public authOCreate(
        provider: string,
        requestBody?: ProviderAuth,
    ): CancelablePromise<ProviderAuth> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/o/{provider}/',
            path: {
                'provider': provider,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
