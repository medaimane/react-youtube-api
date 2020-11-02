import React, {FC} from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
    title: string,
    className: string,
}

export const AppTitle: FC<Props> = ({ title, className  }) => (
    <Typography className={className} variant={'h6'} noWrap>{title}</Typography>
)
