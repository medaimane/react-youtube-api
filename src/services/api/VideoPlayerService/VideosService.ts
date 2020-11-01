import {Observable} from "rxjs";
import {Video} from "../models/Video";

export interface VideosService {
    getVideo(): Observable<Video>;
}
