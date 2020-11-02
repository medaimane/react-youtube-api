import React, {FC} from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import {videoSize} from "./VideoPlayer";

import './VideoPlayerStyles.css';

export const VideoLoading: FC = () => (
    <div className={'player-wrapper '}>
        <Skeleton animation={'wave'} variant={'rect'} width={videoSize.width} height={videoSize.height} />
        {/*<ProgressIndicator />*/}
    </div>
)
