import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import React, {FC} from "react";

interface Props {
    className: string;
}

export const MenuButton: FC<Props> = ({className}) => {
    return (
        <IconButton
            edge="start"
            className={className}
            color="inherit"
            aria-label="open drawer"
        >
            <MenuIcon />
        </IconButton>
    )
}
