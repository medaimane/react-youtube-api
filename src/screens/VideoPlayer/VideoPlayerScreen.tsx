import React, {FC, useEffect} from "react";
import {presenters} from "../../presenter/Presenters";
import {usePresenter} from "../../presenter/usePresenter";
import {ViewState} from "./ViewState";

export const VideoPlayerScreen: FC = () => (
    <div>
        <HelloWorld />
    </div>
);

const HelloWorld = () => {
    presenters.setupVideoPlayerPresenter();
    const videoPresenter = presenters.getVideoPlayerPresenter();
    const state = usePresenter(videoPresenter);

    useEffect(() => {
        videoPresenter.start();
    })

    let view;
    switch (state.viewState) {
        case ViewState.Error:
            view = (<p>{'Error'}</p>);
            break;
        case ViewState.Loading:
            view = (<p>{'Loading'}</p>);
            break;
        case ViewState.Empty:
            view = (<p>{'Empty'}</p>);
            break;
        case ViewState.Data:
            view = (<p>{state.helloWorld}</p>);
    }

    return view;
};
