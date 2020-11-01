export const YOUTUBE_KEY = 'AIzaSyAsAMaOYlGzeJrwMrungI5_Ruv8rmITnAI';

export interface NetworkingServiceConfiguration {
    baseURL?: string;
}

export class DevNetworkingServiceConfiguration implements NetworkingServiceConfiguration {
    baseURL?: string;
}

