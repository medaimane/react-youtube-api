import {dependencies} from "../dependencies/Dependencies";
import {VideoPlayerPresenter} from "../screens/VideoPlayer/VideoPlayerPresenter";
import {SnackBarPresenter} from "../screens/SackBar/SnackBarPresenter";

interface Presenters {
    videoPlayerPresenter: VideoPlayerPresenter;
    snackBarPresenter: SnackBarPresenter;
}

export const presenters: Presenters = {
    videoPlayerPresenter: new VideoPlayerPresenter(dependencies.videosGateway),
    snackBarPresenter: new SnackBarPresenter(),
}
