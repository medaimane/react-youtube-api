import React, {FC} from "react";
import {AppGrid} from "./AppGrid/AppGrid";
import {ButtonIconType, ButtonWithIcon} from "./Buttons/ButtonWithIcon";
import Typography from "@material-ui/core/Typography";
import {Video} from "../services/api/models/Video";
import Skeleton from "@material-ui/lab/Skeleton";
import {local} from "../localization/local";

interface Props {
    isLoading: boolean;
    isEmpty: boolean;
    isButtonDisabled: boolean;
    buttonType: ButtonIconType;
    onButtonClick: () => void;
    selectedVideo: Video;
}

export const VideoFooter: FC<Props> = props => {
    const showTextOrSkeleton = (content: string) => {
        return props.isLoading ? <Skeleton animation={'wave'} /> : content;
    }

    if (props.isEmpty) {
        return (
            <AppGrid>
                <Typography variant={'body1'} paragraph={true}>{local.searchForVideos}</Typography>
            </AppGrid>
        );
    }

    return  (
        <div>
            <AppGrid>
                <ButtonWithIcon
                    disabled={props.isButtonDisabled}
                    buttonType={props.buttonType}
                    onClick={props.onButtonClick}
                />
            </AppGrid>
            <AppGrid>
                <Typography variant={'h6'} component={'h4'}>
                    {showTextOrSkeleton(props.selectedVideo.title)}
                </Typography>
            </AppGrid>
            <AppGrid>
                <Typography variant={'body1'} paragraph={true}>
                    {showTextOrSkeleton(props.selectedVideo.description)}
                </Typography>
            </AppGrid>
            <AppGrid>
                <Typography variant={'subtitle1'} component={'h4'}>
                    {showTextOrSkeleton(props.selectedVideo.channel.name)}
                </Typography>
            </AppGrid>
        </div>
    );
};
