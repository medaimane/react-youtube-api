import {dependencies} from "../dependencies/Dependencies";
import {VideoPlayerPresenter} from "../screens/VideoPlayer/VideoPlayerPresenter";

interface Presenters {
    videoPlayerPresenter: VideoPlayerPresenter;
}

export const presenters: Presenters = {
    videoPlayerPresenter: new VideoPlayerPresenter(dependencies.videosGateway)
}
