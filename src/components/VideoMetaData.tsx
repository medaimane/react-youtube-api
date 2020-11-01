import React, {FC} from "react";
import {AppGrid} from "./AppGrid/AppGrid";
import {ButtonIconType, ButtonWithIcon} from "./Buttons/ButtonWithIcon";
import Typography from "@material-ui/core/Typography";
import {Video} from "../services/api/models/Video";

interface Props {
    isButtonDisabled: boolean;
    buttonType: ButtonIconType;
    onButtonClick: () => void;
    selectedVideo: Video;
}

export const VideoMetaData: FC<Props> = props => (
    <div>
        <AppGrid>
            <ButtonWithIcon
                disabled={props.isButtonDisabled}
                buttonType={props.buttonType}
                onClick={props.onButtonClick}
            />
        </AppGrid>
        <AppGrid>
            <Typography variant={'h6'} component={'h4'}>{props.selectedVideo.title}</Typography>
        </AppGrid>
        <AppGrid>
            <Typography variant={'body1'} paragraph={true}>{props.selectedVideo.description}</Typography>
        </AppGrid>
        <AppGrid>
            <Typography variant={'subtitle1'} component={'h4'}>{props.selectedVideo.channel.name}</Typography>
        </AppGrid>
    </div>
);
