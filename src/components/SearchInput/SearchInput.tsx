import React, {FC} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./SearchInputStyles";
import {local} from "../../localization/local";

interface Props {
    value: string
    placeholder: string;
    onSearch: (str: string) => void;
}

export const SearchInput: FC<Props> = props => {
    const classes = useStyles();

    const handleOnChange = (event: {target : { value: string }}) => {
        props.onSearch(event.target.value);
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                value={props.value}
                placeholder={local.searchPlaceholder}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': local.search }}
                onChange={handleOnChange}
            />
        </div>
    );
};
