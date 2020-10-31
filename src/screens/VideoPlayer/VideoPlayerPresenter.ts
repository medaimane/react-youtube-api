import {Presenter} from "../../presenter/Presenter";
import {VideosService} from "../../services/api/VideoPlayerService/VideosService";
import {Video} from "../../services/api/models/Video";
import {ViewState} from "./ViewState";

interface VideoPlayerOutput {
    videos: Video[];
    viewState: ViewState;
    helloWorld: string;
}

const videoPlayerInitialOutput: VideoPlayerOutput = {
    videos: [],
    viewState: ViewState.Loading,
    helloWorld: '',
}

export class VideoPlayerPresenter extends Presenter<VideoPlayerOutput> {
    private helloWorld: string = '';
    private videos: Video[] = [];
    private viewState: ViewState = ViewState.Loading;

    constructor(private readonly videosService: VideosService) {
        super();
    }

    getInitialOutput = (): VideoPlayerOutput => {
        return videoPlayerInitialOutput;
    }

    start = () => {
        this.getHelloWorld();
    }

    searchVideos = () => {

    }

    getHelloWorld = () => {
        this.videosService.getHelloWorld().subscribe(this.getHelloSuccess, this.getHelloError);

        this.updateOutput();
    }

    private getHelloSuccess = (hello: string) => {
        this.helloWorld = hello;
        this.viewState = ViewState.Data;
    };

    private getHelloError = () => {
        this.viewState = ViewState.Error;
    }

    private updateOutput = () => {
        this.update({
            helloWorld: this.helloWorld,
            videos: this.videos,
            viewState: this.viewState,
        })
    }
}
