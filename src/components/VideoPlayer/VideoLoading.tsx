import React, {FC} from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import './VideoPlayerStyles.css';
import {videoSize} from "./VideoPlayer";

export const VideoLoading: FC = () => (
    <div className={'player-wrapper '}>
        <Skeleton animation={'wave'} variant={'rect'} width={videoSize.width} height={videoSize.height} />
        {/*<ProgressIndicator />*/}
    </div>
)
