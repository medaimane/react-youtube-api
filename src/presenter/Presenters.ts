import {Dependencies, dependencies} from "../dependencies/Dependencies";
import {VideoPlayerPresenter} from "../screens/VideoPlayer/VideoPlayerPresenter";

class Presenters {
    private videoPlayerPresenter: VideoPlayerPresenter | null = null;

    constructor(private readonly dependencies: Dependencies) {
    }

    setupVideoPlayerPresenter = () => {
        this.videoPlayerPresenter = new VideoPlayerPresenter(this.dependencies.videosGateway)
    }

    getVideoPlayerPresenter = () => {
        if(!this.videoPlayerPresenter) {
            throw new Error('MultipleOptionsSelectorPresenter not created!');
        }

        return this.videoPlayerPresenter;
    }
}

export const presenters = new Presenters(dependencies)
