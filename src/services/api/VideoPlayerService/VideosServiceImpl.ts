import {VideosService} from "./VideosService";
import {NetworkingService} from "../../networking/NetworkingService";
import {Observable, of} from "rxjs";
import {Video} from "../models/Video";

export class VideosServiceImpl implements VideosService {
    constructor(private readonly networkingService: NetworkingService) {}

    getVideos(): Observable<Video[]> {
        return of([]);
    }

    getHelloWorld(): Observable<string> {
        return of('Hello World');
    }
}
