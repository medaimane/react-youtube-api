import React, {FC, useEffect} from "react";
import {presenters} from "../../presenter/Presenters";
import {usePresenter} from "../../presenter/usePresenter";
import {SearchAppBar} from "../../components/AppBar/SearchAppBar";
import {local} from "../../localization/local";
import {VideoPlayer} from "../../components/VideoPlayer/VideoPlayer";
import {AppContent} from "../../components/AppContent";
import {ButtonWithIcon} from "../../components/Buttons/ButtonWithIcon";
import {VideoPlayerOutput} from "./VideoPlayerPresenter";
import Typography from "@material-ui/core/Typography";
import {AppGrid} from "../../components/AppGrid/AppGrid";
import Divider from '@material-ui/core/Divider';
import {ViewState} from "./ViewState";
import {VideoLoading} from "../../components/VideoPlayer/VideoLoading";

interface Props {
    className?: string;
}

export const VideoPlayerScreen: FC<Props> = props => {
    const {videoPlayerPresenter} = presenters;
    const state = usePresenter<VideoPlayerOutput>(videoPlayerPresenter);
    const { selectedVideo, buttonType, isPlaying, viewState, searchString } = state;

    useEffect(() => {
        videoPlayerPresenter.searchVideos('');
    }, [videoPlayerPresenter])

    const handleButtonClick = () => {
        videoPlayerPresenter.onPlayOrPauseClick();
    }

    const handleOnSearch = (str: string) => {
        videoPlayerPresenter.searchVideos(str);
    }

    const isLoading = () => viewState === ViewState.Loading;

    return (
        <div className={props.className}>
            <SearchAppBar title={local.appTitle} onSearch={handleOnSearch} search={searchString} />
            <AppContent>
                <AppGrid>
                    {isLoading()
                        ? <VideoLoading />
                        : <VideoPlayer id={selectedVideo.id} isPlaying={isPlaying} />
                    }
                </AppGrid>
                <Divider />
                <AppGrid>
                    <ButtonWithIcon
                        disabled={viewState !== ViewState.Data}
                        buttonType={buttonType}
                        onClick={handleButtonClick}
                    />
                </AppGrid>
                <Divider />
                <AppGrid>
                    <Typography variant={'h6'} component={'h4'}>{selectedVideo.title}</Typography>
                </AppGrid>
                <AppGrid>
                    <Typography variant={'body1'} paragraph={true}>{selectedVideo.description}</Typography>
                </AppGrid>
                <AppGrid>
                    <Typography variant={'subtitle1'} component={'h4'}>{selectedVideo.channel.name}</Typography>
                </AppGrid>
            </AppContent>
        </div>
    );
};
