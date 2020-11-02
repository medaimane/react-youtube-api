import React, {FC, useEffect} from "react";
import {presenters} from "../../presenter/Presenters";
import {usePresenter} from "../../presenter/usePresenter";
import {SearchAppBar} from "../../components/AppBar/SearchAppBar";
import {local} from "../../localization/local";
import {VideoPlayer} from "../../components/VideoPlayer/VideoPlayer";
import {AppContent} from "../../components/AppContent";
import {VideoPlayerOutput} from "./VideoPlayerPresenter";
import {ViewState} from "./ViewState";
import {VideoLoading} from "../../components/VideoPlayer/VideoLoading";
import {VideoFooter} from "../../components/VideoFooter";

interface Props {
    className?: string;
}
// TODO: Add list of videos:
//  Show all retrieved videos of the search to give user choice to select another video.

export const VideoPlayerScreen: FC<Props> = props => {
    const {videoPlayerPresenter, snackBarPresenter} = presenters;
    const state = usePresenter<VideoPlayerOutput>(videoPlayerPresenter);
    const { selectedVideo, buttonType, isPlaying, viewState, searchString } = state;

    useEffect(() => {
        videoPlayerPresenter.showSnackBar(snackBarPresenter.show);
    }, [viewState, videoPlayerPresenter, snackBarPresenter]);

    const isLoading = () => viewState === ViewState.Loading;
    const isEmpty = () => viewState === ViewState.Empty;

    const handleButtonClick = () => {
        videoPlayerPresenter.onPlayOrPauseClick();
    }

    const handleOnSearch = (str: string) => {
        videoPlayerPresenter.searchVideos(str);
    }

    const videoPlayer = () => {
        return isLoading()
            ? <VideoLoading />
            : <VideoPlayer videoId={selectedVideo.id} isPlaying={isPlaying} />;
    };

    return (
        <div className={props.className}>
            <SearchAppBar title={local.appTitle} onSearch={handleOnSearch} search={searchString} />
            <AppContent>
                {videoPlayer()}
                <VideoFooter
                    isLoading={isLoading()}
                    isEmpty={isEmpty()}
                    selectedVideo={selectedVideo}
                    buttonType={buttonType}
                    isButtonDisabled={viewState !== ViewState.Data}
                    onButtonClick={handleButtonClick}
                />
            </AppContent>
        </div>
    );
};
