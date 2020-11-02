import {debounceTime} from "rxjs/operators";
import {Presenter} from "../../presenter/Presenter";
import {VideosService} from "../../services/api/VideoPlayerService/VideosService";
import {NullVideo, Video} from "../../services/api/models/Video";
import {ViewState} from "./ViewState";
import {ButtonIconType} from "../../components/Buttons/ButtonWithIcon";
import {APIError, QuotaExceededErrorReason} from "../../services/api/APIError";

export interface VideoPlayerOutput {
    videos: Video[];
    selectedVideo: Video;
    searchString: string;
    isPlaying: boolean;
    viewState: ViewState;
    buttonType: ButtonIconType;
}

const VideoPlayerInitialOutput: VideoPlayerOutput = {
    videos: [],
    selectedVideo: NullVideo,
    searchString: '',
    isPlaying: false,
    viewState: ViewState.Loading,
    buttonType: ButtonIconType.PlayIcon,
}

export class VideoPlayerPresenter extends Presenter<VideoPlayerOutput> {
    private searchString: string = '';
    private buttonType: ButtonIconType = ButtonIconType.PlayIcon;
    private viewState: ViewState = ViewState.Loading;
    private videos: Video[] = [];
    private selectedVideo: Video = NullVideo;
    private isPlaying: boolean = false;

    constructor(private readonly videosService: VideosService) {
        super();
    }

    getInitialOutput = (): VideoPlayerOutput => {
        return VideoPlayerInitialOutput;
    }

    start = () => {};

    onPlayOrPauseClick = () => {
        this.isPlaying = !this.isPlaying;
        this.toggleButtonIconType();

        this.updateOutput();
    }

    searchVideos = (searchString: string) => {
        this.searchString = searchString;

        this.videosService
            .searchVideos(searchString)
            .pipe(debounceTime(1000))
            .subscribe(this.getVideoSuccess, this.processError);

        this.updateOutput();
    }

    private getVideoSuccess = (videos: Video[]) => {
        const isEmpty = videos.length === 0;
        this.viewState = isEmpty ? ViewState.Empty : ViewState.Data;

        this.selectedVideo = videos[0];
        this.videos = videos;
    };

    private processError = (error: APIError) => {
        this.processErrorViewState(error)

        this.selectedVideo = NullVideo;
        this.videos = [];
    }

    private processErrorViewState = (error: APIError) => {
        const errorMessage = error?.errorMessages[0];

        if (errorMessage?.reason === QuotaExceededErrorReason) {
            this.viewState = ViewState.Loading;
        } else {
            this.viewState = ViewState.Error;
        }
    }

    private toggleButtonIconType = () => {
        const isPlay = this.buttonType === ButtonIconType.PlayIcon;
        this.buttonType = isPlay ? ButtonIconType.PauseIcon : ButtonIconType.PlayIcon;
    }

    private updateOutput = () => {
        this.update({
            searchString: this.searchString,
            buttonType: this.buttonType,
            videos: this.videos,
            selectedVideo: this.selectedVideo,
            isPlaying: this.isPlaying,
            viewState: this.viewState,
        })
    }
}
