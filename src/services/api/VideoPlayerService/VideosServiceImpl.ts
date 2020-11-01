import {VideosService} from "./VideosService";
import {NetworkingService} from "../../networking/NetworkingService";
import {Observable} from "rxjs";
import {Video} from "../models/Video";
import {YOUTUBE_KEY} from "../../networking/NetworkingServiceConfiguration";
import {map} from "rxjs/operators";
import {VideosSearchDataJSON} from "../models/VideosListJSON";

export class VideosServiceImpl implements VideosService {
    constructor(private readonly networkingService: NetworkingService) {
    }

    searchVideo = (query: string): Observable<Video> => {
        const endpoint = `v3/search?key=${YOUTUBE_KEY}&type=video&part=snippet&maxResults=1&q=${query}`;
        return this.networkingService.getJSON<VideosSearchDataJSON>(endpoint).pipe(
            map(this.mapFirstVideoDataToVideo),
        );
    }

    private mapFirstVideoDataToVideo = (videosJSON: VideosSearchDataJSON): Video => {
        const videoData = videosJSON.items[0];
        const { id : { videoId }, snippet } = videoData;
        return {
            id: videoId,
            title: snippet.title,
            description: snippet.description,
            channel: {
                name: snippet.channelTitle,
            },
        };
    };
}
