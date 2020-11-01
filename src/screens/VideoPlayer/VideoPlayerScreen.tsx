import React, {FC, useEffect} from "react";
import {presenters} from "../../presenter/Presenters";
import {usePresenter} from "../../presenter/usePresenter";
import {SearchAppBar} from "../../components/AppBar/SearchAppBar";
import {local} from "../../localization/local";
import {VideoPlayer} from "../../components/VideoPlayer/VideoPlayer";
import {AppContent} from "../../components/AppContent";
import {VideoPlayerOutput} from "./VideoPlayerPresenter";
import Divider from '@material-ui/core/Divider';
import {ViewState} from "./ViewState";
import {VideoLoading} from "../../components/VideoPlayer/VideoLoading";
import {VideoMetaData} from "../../components/VideoMetaData";

interface Props {
    className?: string;
}

export const VideoPlayerScreen: FC<Props> = props => {
    const {videoPlayerPresenter} = presenters;
    const state = usePresenter<VideoPlayerOutput>(videoPlayerPresenter);
    const { selectedVideo, buttonType, isPlaying, viewState, searchString } = state;

    useEffect(() => {
        videoPlayerPresenter.start();
    }, [videoPlayerPresenter])

    const handleButtonClick = () => {
        videoPlayerPresenter.onPlayOrPauseClick();
    }

    const handleOnSearch = (str: string) => {
        videoPlayerPresenter.searchVideos(str);
    }

    const isLoading = () => viewState === ViewState.Loading;

    const getVideoPlayer = () => {
        if (isLoading()) {
            return <VideoLoading />;
        }
        return <VideoPlayer id={selectedVideo.id} isPlaying={isPlaying} />;
    };

    return (
        <div className={props.className}>
            <SearchAppBar title={local.appTitle} onSearch={handleOnSearch} search={searchString} />
            <AppContent>
                {getVideoPlayer()}
                <VideoMetaData
                    selectedVideo={selectedVideo}
                    buttonType={buttonType}
                    isButtonDisabled={viewState !== ViewState.Data}
                    onButtonClick={handleButtonClick}
                />
            </AppContent>
        </div>
    );
};
