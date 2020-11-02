export const getYoutubeDataAPIKey = (): string => {
    console.log(process);

    return process.env.REACT_APP_YOUTUBE_DATA_API_KEY ?? '';
}

export interface NetworkingServiceConfiguration {
    baseURL?: string;
}

export class DevNetworkingServiceConfiguration implements NetworkingServiceConfiguration {
    baseURL?: string;
}

// TODO: Add production configuration
// class ProductionNetworkingServiceConfiguration

