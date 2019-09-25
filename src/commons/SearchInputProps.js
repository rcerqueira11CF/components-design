import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  root: {
    width: "250px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    borderRadius: "18px",
    border: "solid 0.5px #6d6d6d",
    boxShadow: "none",
    boxSizing: "border-box",
    "&:hover": {
      border: "solid 2px #6d6d6d",
    },
    "&:focus-within": {
      border: "solid 2px #00c85f",
    },

  },
  iconButton: {
    marginRight: "1px",
    padding: 4,
    "&:focus-within": {
      color: "white",
      backgroundColor: '#00c85f',
      padding: 2,
      marginRight: "2px",
    },
  },
  input: {
    marginLeft: "23px",
    flex: 1,
    "&:focus-within": {
      marginLeft: "22px",
    },
    "&:hover":{
      marginLeft: "22px",
    },
  },
};




function SearchInputProps(props) {
  const { classes, disabled, placeholder, onClick } = props;

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search google maps" }}
        disabled={disabled}

      />
      <IconButton
        className={classes.iconButton}
        disabled={disabled}
        onClick={onClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchInputProps.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchInputProps);
