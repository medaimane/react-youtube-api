import {Presenter} from "../../presenter/Presenter";
import {VideosService} from "../../services/api/VideoPlayerService/VideosService";
import {NullVideo, Video} from "../../services/api/models/Video";
import {ViewState} from "./ViewState";
import {ButtonIconType} from "../../components/Buttons/ButtonWithIcon";
import {debounceTime} from "rxjs/operators";

export interface VideoPlayerOutput {
    selectedVideo: Video;
    searchString: string;
    isPlaying: boolean;
    viewState: ViewState;
    buttonType: ButtonIconType;
}

const VideoPlayerInitialOutput: VideoPlayerOutput = {
    selectedVideo: NullVideo,
    searchString: '',
    isPlaying: false,
    viewState: ViewState.Loading,
    buttonType: ButtonIconType.PlayIcon,
}

export class VideoPlayerPresenter extends Presenter<VideoPlayerOutput> {
    private searchString: string;
    private buttonType: ButtonIconType;
    private viewState: ViewState;
    private selectedVideo: Video;
    private isPlaying: boolean;

    constructor(private readonly videosService: VideosService) {
        super();

        this.isPlaying = false;
        this.searchString = '';
        this.selectedVideo = NullVideo;
        this.buttonType = ButtonIconType.PlayIcon;
        this.viewState = ViewState.Loading;
    }

    getInitialOutput = (): VideoPlayerOutput => {
        return {...VideoPlayerInitialOutput};
    }

    onPlayOrPauseClick = () => {
        this.isPlaying = !this.isPlaying;
        this.toggleButtonIconType();

        this.updateOutput();
    }

    searchVideos = (searchString: string) => {
        this.searchString = searchString;

        this.videosService.searchVideo(searchString).subscribe(this.getVideoSuccess, this.processError);

        this.updateOutput();
    }

    private getVideoSuccess = (video: Video) => {
        this.viewState = ViewState.Data;
        this.selectedVideo = video;
    };

    private processError = () => {
        this.viewState = ViewState.Error;
        this.selectedVideo = NullVideo;
    }

    private toggleButtonIconType = () => {
        const isPlay = this.buttonType === ButtonIconType.PlayIcon;
        this.buttonType = isPlay ? ButtonIconType.PauseIcon : ButtonIconType.PlayIcon;
    }

    private updateOutput = () => {
        this.update({
            searchString: this.searchString,
            buttonType: this.buttonType,
            selectedVideo: this.selectedVideo,
            isPlaying: this.isPlaying,
            viewState: this.viewState,
        })
    }
}
