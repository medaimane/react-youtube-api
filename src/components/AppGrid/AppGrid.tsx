import React, {FC, ReactNode} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./AppGridStyles";

interface Props {
    children: ReactNode;
}

export const AppGrid: FC<Props> = props => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                    {props.children}
                </Grid>
            </Grid>
        </Paper>
    );
};
