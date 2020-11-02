export const YOUTUBE_KEY = 'AIzaSyAW55ywqYRXIMsBEoiRYnbyHkeTyqpooFc';

export interface NetworkingServiceConfiguration {
    baseURL?: string;
}

export class DevNetworkingServiceConfiguration implements NetworkingServiceConfiguration {
    baseURL?: string;
}

// TODO: Add production configuration
// class ProductionNetworkingServiceConfiguration

