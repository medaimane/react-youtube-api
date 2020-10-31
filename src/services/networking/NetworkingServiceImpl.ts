import {NetworkingService, Headers} from "./NetworkingService";
import {Observable, throwError} from "rxjs";
import {AjaxResponse} from "rxjs/ajax";
import {AjaxCreationMethod} from "rxjs/internal-compatibility";
import {NetworkingServiceConfiguration} from "./NetworkingServiceConfiguration";
import {buildEndpointURL} from "./buildEndpointURL";
import {catchError, map} from "rxjs/operators";
import {makeError} from "../api/APIError";

enum AjaxMethod {
    GET = 'GET',
    //POST = 'POST',
    //PUT = 'PUT',
}

export class NetworkingServiceImpl implements NetworkingService {
    private static TIMEOUT_IN_MS: number = 30000;

    constructor(
        private readonly ajaxCreationMethod: AjaxCreationMethod,
        private readonly configuration: NetworkingServiceConfiguration,
        private readonly timeout: number = NetworkingServiceImpl.TIMEOUT_IN_MS,
    ) {}

    get(endpoint: string, headers?: Headers): Observable<AjaxResponse> {
        const request = this.getRequest(endpoint, headers);

        return this.sendRequest(request);
    }

    getJSON<T>(endpoint: string, headers?: Headers): Observable<T> {
        const request = this.getRequest(endpoint, headers);

        return this.sendRequest(request).pipe(map(response => response.response));
    }

    private getRequest(endpoint: string, headers?: Headers) {
        const url = buildEndpointURL(this.configuration.baseURL, endpoint);

        return this.buildRequest(url, AjaxMethod.GET, headers);
    }

    private buildRequest(
        url: string,
        method: AjaxMethod,
        headers?: Headers,
        body?: any,
    ): Observable<AjaxResponse> {
        return this.ajaxCreationMethod({
            url,
            method,
            body,
            headers,
            timeout: this.timeout,
        });
    }

    private sendRequest = (request: Observable<AjaxResponse>): Observable<AjaxResponse> => {
        return request.pipe(
            catchError(error => {
                console.log(error);

                return throwError(makeError(error));
            }),
        );
    };
}
