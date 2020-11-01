import {Observable} from "rxjs";
import {Video} from "../models/Video";

export interface VideosService {
    searchVideo(query: string): Observable<Video>;
}
