import React, {FC} from "react";
import Snackbar from '@material-ui/core/Snackbar';
import {AppAlert} from "./AppAlert";
import {Color} from "@material-ui/lab/Alert/Alert";
import {useStyles} from "./AppSnackBarStyles";

const SnackBareTimeOut = 5000;

export enum AlertState {
    Error = 'Error',
    Warning = 'Warning',
    Info = 'Info',
    Success = 'Success',
}

interface Props {
    isOpen: boolean;
    state: AlertState;
    message: string;
    onClosePress: () => void;
}

const mapAlertStateToColor = (state: string): Color => {
    switch (state) {
        case AlertState.Error:
            return 'error';
        case AlertState.Info:
            return 'info';
        case AlertState.Warning:
            return 'warning';
    }
    return 'success';
};

export const AppSnackBar: FC<Props> = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Snackbar open={props.isOpen} autoHideDuration={SnackBareTimeOut} onClose={props.onClosePress}>
                <AppAlert
                    severity={mapAlertStateToColor(props.state)}
                    onClose={props.onClosePress}
                >{props.message}</AppAlert>
            </Snackbar>
        </div>
    );
}
