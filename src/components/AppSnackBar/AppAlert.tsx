import React, {FC} from "react";
import MuiAlert from "@material-ui/lab/Alert";
import {AlertProps} from "@material-ui/lab/Alert/Alert";


export const AppAlert: FC<AlertProps> = props => (
    <MuiAlert elevation={6} variant="filled" {...props} />
);
