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
    viewState: ViewState.Empty,
    buttonType: ButtonIconType.PlayIcon,
}

// TODO: Add Unit test.
export class VideoPlayerPresenter extends Presenter<VideoPlayerOutput> {
    private showSnackBarHandler: ShowSnackBarHandler | null = null;

    private searchString: string = '';
    private buttonType: ButtonIconType = ButtonIconType.PlayIcon;
    private viewState: ViewState = ViewState.Empty;
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
        this.showSnackBarHandler = showSnackBarHandler;

        this.showSnackBarAlertBasedOnViewState();

        this.updateOutput();
    };

    onPlayOrPauseClick = () => {
        this.isPlaying = !this.isPlaying;
        this.toggleButtonIconType();

        this.updateOutput();
    }

    searchVideos = (searchString: string) => {
        this.viewState = ViewState.Loading;
        this.searchString = searchString;

        this.updateOutput();

        this.videosService
            .searchVideos(searchString)
            .pipe(debounceTime(1000))
            .subscribe(this.getVideoSuccess, this.processError);
    }

    private getVideoSuccess = (videos: Video[]) => {
        const isEmpty = videos.length === 0;
        this.viewState = isEmpty ? ViewState.Empty : ViewState.Data;

        this.selectedVideo = videos[0];
        this.videos = videos;

        this.showSnackBarAlertBasedOnViewState()

        this.updateOutput();
    };

    private processError = (error: APIError) => {
        this.processErrorViewState(error)

        this.showSnackBarAlertBasedOnViewState()

        this.selectedVideo = NullVideo;
        this.videos = [];

        this.updateOutput();
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

    private showSnackBarAlertBasedOnViewState = () => {
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
                if (this.isQuotaExceededError) {
                    message = local.youtubeAPIError;
                    state = AlertState.Error;
                    break;
                }
                message = local.loadingMessage;
                state = AlertState.Info;
                break;
            case ViewState.Error:
                message = local.errorMessage;
                state = AlertState.Error;
                break;
        }

        this.showSnackBarHandler?.(message, state);
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
