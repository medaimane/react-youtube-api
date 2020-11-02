import {debounceTime} from "rxjs/operators";
import {Presenter} from "../../presenter/Presenter";
import {VideosGateway} from "../../services/api/VideoPlayerService/VideosGateway";
import {NullVideo, Video} from "../../services/api/models/Video";
import {ViewState} from "./ViewState";
import {ButtonIconType} from "../../components/Buttons/ButtonWithIcon";
import {APIError, QuotaExceededErrorReason} from "../../services/api/APIError";
import {AlertState} from "../../components/AppSnackBar/AppSnackBar";
import {local} from "../../localization/local";

type ShowSnackBarHandler = (message: string, state: AlertState) => void

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

// TODO: Unit test.
export class VideoPlayerPresenter extends Presenter<VideoPlayerOutput> {
    private searchString: string = '';
    private buttonType: ButtonIconType = ButtonIconType.PlayIcon;
    private viewState: ViewState = ViewState.Loading;
    private videos: Video[] = [];
    private selectedVideo: Video = NullVideo;
    private isPlaying: boolean = false;

    private isQuotaExceededError: boolean = false;

    constructor(private readonly videosService: VideosGateway) {
        super();
    }

    getInitialOutput = (): VideoPlayerOutput => {
        return VideoPlayerInitialOutput;
    }

    showSnackBar = (showSnackBarHandler: ShowSnackBarHandler) => {
        this.showSnackBarAlertBasedOnViewState(showSnackBarHandler);

        this.updateOutput();
    };

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
            this.isQuotaExceededError = true;
            this.viewState = ViewState.Loading;
        } else {
            this.isQuotaExceededError = false;
            this.viewState = ViewState.Error;
        }
    }

    private toggleButtonIconType = () => {
        const isPlay = this.buttonType === ButtonIconType.PlayIcon;
        this.buttonType = isPlay ? ButtonIconType.PauseIcon : ButtonIconType.PlayIcon;
    }

    private showSnackBarAlertBasedOnViewState = (showSnackBarHandler: ShowSnackBarHandler) => {
        let message = '';
        let state = AlertState.Info;

        switch (this.viewState) {
            case ViewState.Data:
                message = local.successMessage;
                state = AlertState.Success;
                break;
            case ViewState.Empty:
                message = local.emptyMessage;
                state = AlertState.Info;
                break;
            case ViewState.Loading:
                message = local.loadingMessage;
                state = AlertState.Info;
                break;
            case ViewState.Error:
                message = this.isQuotaExceededError ? local.youtubeAPIError : local.errorMessage;
                state = AlertState.Error;
                break;
        }

        showSnackBarHandler(message, state);
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
