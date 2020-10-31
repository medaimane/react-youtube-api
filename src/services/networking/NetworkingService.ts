import {Observable} from "rxjs";
import {AjaxResponse} from "rxjs/ajax";

export type Headers = { [key: string]: string };

export interface NetworkingService {
    get(endpoint: string, headers?: Headers): Observable<AjaxResponse>;

    getJSON<T>(endpoint: string, headers?: Headers): Observable<T>;
}
