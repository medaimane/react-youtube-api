import React, {FC} from "react";
import Player from "react-player";
import ReactPlayer from "react-player";

import './VideoPlayerStyles.css';

const BaseURL = 'https://www.youtube.com';

const videoSize = {
    width: '100%',
    height: '100%',
}

interface Props {
    id: string;
    isPlaying: boolean;
    onVideoReady?: (player: ReactPlayer) => void;
}

export const VideoPlayer: FC<Props> = props => {
    const url = `${BaseURL}/watch?v=${props.id}`;

    const onVideoReady = (player: ReactPlayer) => {
        props.onVideoReady?.(player);
    }

    return (
        <div className='player-wrapper'>
            <Player
                className='player'
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
