import React, {FC} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {useStyles} from "./SearchAppBarStyles";
import {MenuButton} from "../Buttons/MenuButton";
import {AppTitle} from "../AppTitle";
import {local} from "../../localization/local";
import {SearchInput} from "../SearchInput/SearchInput";
import {Container} from "@material-ui/core";

interface Props {
    title: string;
}

export const SearchAppBar: FC<Props> = props => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar>
                        <MenuButton className={classes.menuButton} />
                        <SearchInput placeholder={local.searchPlaceholder} />
                        <div className={classes.grow} />
                        <AppTitle title={props.title} className={classes.title} />
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
