import {Observable} from "rxjs";
import {Video} from "../models/Video";

export interface VideosGateway {
    searchVideos(query: string): Observable<Video[]>;
}
