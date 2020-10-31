import {Observable} from "rxjs";
import {Video} from "../models/Video";

export interface VideosService {
    getVideos(): Observable<Video[]>;
    getHelloWorld(): Observable<string>;
}
