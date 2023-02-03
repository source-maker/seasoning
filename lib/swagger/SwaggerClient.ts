/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AuthService } from './services/AuthService';
import { ItemsService } from './services/ItemsService';
import { LoginService } from './services/LoginService';
import { LogoutService } from './services/LogoutService';
import { MeService } from './services/MeService';
import { PurchaseService } from './services/PurchaseService';
import { SignupService } from './services/SignupService';
import { SwaggerService } from './services/SwaggerService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class SwaggerClient {

    public readonly auth: AuthService;
    public readonly items: ItemsService;
    public readonly login: LoginService;
    public readonly logout: LogoutService;
    public readonly me: MeService;
    public readonly purchase: PurchaseService;
    public readonly signup: SignupService;
    public readonly swagger: SwaggerService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.auth = new AuthService(this.request);
        this.items = new ItemsService(this.request);
        this.login = new LoginService(this.request);
        this.logout = new LogoutService(this.request);
        this.me = new MeService(this.request);
        this.purchase = new PurchaseService(this.request);
        this.signup = new SignupService(this.request);
        this.swagger = new SwaggerService(this.request);
    }
}

