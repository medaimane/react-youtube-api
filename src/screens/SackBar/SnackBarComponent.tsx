import React, {FC} from "react";
import {AppSnackBar} from "../../components/AppSnackBar/AppSnackBar";
import {presenters} from "../../presenter/Presenters";
import {usePresenter} from "../../presenter/usePresenter";
import {SnackBarOutput} from "./SnackBarPresenter";

export const SnackBarComponent: FC = () => {
    const { snackBarPresenter } = presenters;
    const state = usePresenter<SnackBarOutput>(snackBarPresenter);

    return (
        <AppSnackBar
            isOpen={state.isOpen}
            state={state.alertState}
            message={state.message}
            onClosePress={snackBarPresenter.hide}
        />
    );
};
