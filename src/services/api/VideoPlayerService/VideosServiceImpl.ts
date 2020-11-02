import {VideosGateway} from "./VideosGateway";
import {NetworkingService} from "../../networking/NetworkingService";
import {Observable} from "rxjs";
import {Video} from "../models/Video";
import {map} from "rxjs/operators";
import {VideosSearchDataJSON} from "../models/VideosListJSON";
import {getYoutubeDataAPIKey} from "../../networking/NetworkingServiceConfiguration";

export class VideosServiceImpl implements VideosGateway {
    constructor(private readonly networkingService: NetworkingService) {
    }

    searchVideos = (query: string): Observable<Video[]> => {
        const youtubeKey = getYoutubeDataAPIKey();
        const endpoint = `v3/search?key=${youtubeKey}&type=video&part=snippet&maxResults=1&q=${query}`;
        return this.networkingService.getJSON<VideosSearchDataJSON>(endpoint).pipe(
            map(this.mapVideosDataToVideos),
        );
    }

    private mapVideosDataToVideos = (videosJSON: VideosSearchDataJSON): Video[] => {
        return videosJSON.items.map(({ id : { videoId }, snippet }) => ({
            id: videoId,
            title: snippet.title,
            description: snippet.description,
            channel: {
                name: snippet.channelTitle,
            },
        }));
    };
}
