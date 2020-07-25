import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getWeather } from "../../store/actions/weather";
import {
  getAutoCompleteList,
  resetAutoComplete,
  setLocationByAutoComplete,
  setAutoCompleteValue,
} from "../../store/actions/autoComplete";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

import { useStyles } from "./style";

export default function Search() {
  const classes = useStyles();

  const autoComplete = useSelector((state) => state.autoComplete);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const value = e.target.value;
    dispatch(setAutoCompleteValue(value));
    if (value.length > 0) {
      await dispatch(getAutoCompleteList(value));
    } else {
      dispatch(resetAutoComplete());
    }
  };

  const handleSubmit = async (e) => {
    if (
      autoComplete.text.length > 0 &&
      autoComplete.isFetching === 0 &&
      autoComplete.locations.length > 0
    ) {
      await dispatch(getLocation(autoComplete.locations[0].cityName));
      dispatch(resetAutoComplete());
    }
  };

  const handleKeyPress = async (e) => {
    if (e.charCode === 13 || e.key === "Enter") {
      e.preventDefault();
      await handleSubmit();
    }
  };

  const labelButton = () => {
    if (autoComplete.locations.length > 0 && autoComplete.text.length > 0) {
      return (
        <IconButton
          onClick={() => dispatch(resetAutoComplete())}
          aria-label="delete"
        >
          <ClearIcon fontSize="small" color="inherit" />
        </IconButton>
      );
    }
  };

  const autoCompleteSelected = async (locationRawData) => {
    dispatch(resetAutoComplete());
    await dispatch(setLocationByAutoComplete(locationRawData));
    await dispatch(getWeather(locationRawData.key));
  };

  const renderAutoComplete = () => {
    if (autoComplete.locations.length === 0 || autoComplete.text.length === 0) {
      return null;
    }

    return (
      <ul className={classes.searchResults}>
        {autoComplete.locations.map((location, index) => (
          <li
            key={index}
            onClick={async () => await autoCompleteSelected(location)}
            className={classes.ResultList}
          >
            <span>{location.cityName}</span>
            <span className={classes.searchLabel}>{location.country}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={classes.search}>
      <IconButton onClick={handleSubmit} className={classes.searchIcon}>
        <SearchIcon />
      </IconButton>
      <InputBase
        onChange={handleChange}
        value={autoComplete.text}
        onKeyPress={handleKeyPress}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      {labelButton()}
      {renderAutoComplete()}
    </div>
  );
}
