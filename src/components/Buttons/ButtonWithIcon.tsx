import React, {FC, ReactNode} from "react";
import {Button} from "@material-ui/core";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import {makeStyles} from "@material-ui/core/styles";
import {local} from "../../localization/local";

export enum ButtonIconType {
    PauseIcon = 'PauseIcon',
    PlayIcon = 'PlayIcon',
}

interface ButtonConfig {
    title: string;
    getIcon: () => ReactNode,
}

const mapButtonTypeToConfig = (buttonType: ButtonIconType): ButtonConfig => {
    switch (buttonType) {
        case ButtonIconType.PlayIcon:
            return {
                title: local.play,
                getIcon: () => <PlayCircleOutlineIcon/>,
            };
        case ButtonIconType.PauseIcon:
            return {
                title: local.pause,
                getIcon: () => <PauseCircleOutlineIcon />,
            }
    }
};

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

interface Props {
    disabled: boolean;
    buttonType: ButtonIconType;
    onClick?: () => void;
}

export const ButtonWithIcon: FC<Props> = props => {
    const classes = useStyles();

    const { title, getIcon } = mapButtonTypeToConfig(props.buttonType);

    const handleOnClick = () => props.onClick?.();

    return (
        <div>
            <Button
                disabled={props.disabled}
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={getIcon()}
                onClick={handleOnClick}
            >{title}</Button>
        </div>
    )
};
