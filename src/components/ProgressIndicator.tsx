import React, {FC} from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export const ProgressIndicator: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color={'secondary'} />
        </div>
    );
};

