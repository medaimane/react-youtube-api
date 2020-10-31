import { ajax } from 'rxjs/ajax';
import {VideosService} from "../services/api/VideoPlayerService/VideosService";
import {VideosServiceImpl} from "../services/api/VideoPlayerService/VideosServiceImpl";
import {NetworkingServiceImpl} from "../services/networking/NetworkingServiceImpl";
import {DevNetworkingServiceConfiguration} from "../services/networking/NetworkingServiceConfiguration";

export interface Dependencies {
    videosGateway: VideosService;
}

const networkServiceConfiguration = new DevNetworkingServiceConfiguration();

const networkingService = new NetworkingServiceImpl(
    ajax,
    networkServiceConfiguration,
);

export const dependencies: Dependencies = {
    videosGateway: new VideosServiceImpl(networkingService),
}
