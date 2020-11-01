import {AjaxError} from "rxjs/ajax";

type DefaultParamsType = Record<string, any>;

export interface ErrorMessage<T extends DefaultParamsType = DefaultParamsType> {
    id: string;
    message: string;
    parameters: T;
}

export interface APIError<T extends Record<string, any> = Record<string, any>> {
    status: number;
    errorMessages: ErrorMessage<T>[];
}

export const makeError = (e: AjaxError): APIError => ({
    status: e.status,
    errorMessages: e.xhr?.response?.errorMessages,
});
