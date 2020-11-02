import { ajax } from 'rxjs/ajax';
import {VideosGateway} from "../services/api/VideoPlayerService/VideosGateway";
import {VideosServiceImpl} from "../services/api/VideoPlayerService/VideosServiceImpl";
import {NetworkingServiceImpl} from "../services/networking/NetworkingServiceImpl";
import {DevNetworkingServiceConfiguration} from "../services/networking/NetworkingServiceConfiguration";

export interface Dependencies {
    videosGateway: VideosGateway;
}

const networkServiceConfiguration = new DevNetworkingServiceConfiguration();

const networkingService = new NetworkingServiceImpl(
    ajax,
    networkServiceConfiguration,
);

export const dependencies: Dependencies = {
    videosGateway: new VideosServiceImpl(networkingService),
}
