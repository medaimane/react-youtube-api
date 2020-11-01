import {Observable} from "rxjs";
import {Video} from "../models/Video";

export interface VideosService {
    searchVideos(query: string): Observable<Video[]>;
}
