import {VideosService} from "./VideosService";
import {NetworkingService} from "../../networking/NetworkingService";
import {Observable, of} from "rxjs";
import {Video} from "../models/Video";
import {VideoStub} from "../../../__tests__/stubs/videoStub";

export class VideosServiceImpl implements VideosService {
    constructor(private readonly networkingService: NetworkingService) {}

    getVideo = (): Observable<Video> => {
        return of(VideoStub);
    }
}
