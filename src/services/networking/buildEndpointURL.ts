import {YoutubeBaseURL} from "./baseURLs";

export const buildYoutubeVideoURL = (videoId: string): string => {
    return `${YoutubeBaseURL}/watch?v=${videoId}`;
}

export const buildEndpointURL = (
    baseURL: string | undefined,
    endpoint: string,
    params?: string,
): string => {
    return baseURL + 'youtube/' + endpoint + (params || '');
}
