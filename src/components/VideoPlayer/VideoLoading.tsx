import React, {FC} from "react";
import {ProgressIndicator} from "../ProgressIndicator";

import './VideoPlayerStyles.css';

export const VideoLoading: FC = () => (
    <div className={'player-wrapper '}>
        <ProgressIndicator />
    </div>
)
