import React, {FC} from "react";
import Player from "react-player";
import ReactPlayer from "react-player";
import {buildYoutubeVideoURL} from "../../services/networking/buildEndpointURL";

import './VideoPlayerStyles.css';

export const videoSize = {
    width: '100%',
    height: '100%',
}

interface Props {
    videoId: string;
    isPlaying: boolean;
    onVideoReady?: (player: ReactPlayer) => void;
}

export const VideoPlayer: FC<Props> = props => {
    const url = buildYoutubeVideoURL(props.videoId);

    const onVideoReady = (player: ReactPlayer) => {
        props.onVideoReady?.(player);
    }

    return (
        <div className={'player-wrapper'}>
            <Player
                className={'player'}
                url={url}
                playing={props.isPlaying}
                controls={true}
                width={videoSize.width}
                height={videoSize.height}
                onReady={onVideoReady}
                config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    },
                }}
            />
        </div>
    );
}
