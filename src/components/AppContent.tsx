import React, {FC, ReactNode} from "react";
import {Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
}));

interface Props {
    children: ReactNode;
}

export const AppContent: FC<Props> = props => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <div className={classes.root}>
                {props.children}
            </div>
        </Container>
    );
};
