import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: '80%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));
