import React, {FC} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./SearchInputStyles";
import {local} from "../../localization/local";

interface Props {
    placeholder: string;
}

export const SearchInput: FC<Props> = props => {
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder={local.searchPlaceholder}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
};
