import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const styles = {
  root: {
    width: '250px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '18px',
    border: 'solid 0.5px #6d6d6d',
    boxShadow: 'none',
    boxSizing: 'border-box',
    "&:hover": {
      border: "solid 2px #6d6d6d",
      "& iconButton": {
        backgroundColor: 'green',
        padding: 4,
      }
    }
  },
  input: {
    marginLeft: '23px',
    flex: 1,
  },
  iconButton: {
    marginRight: '0.5px',
    padding: 5,
  },
};

function SearchInputProps(props) {

  const {
    classes,
    disabled,
    placeholder
  } = props;
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search google maps' }}
        disabled={disabled}
      />
      <IconButton className={classes.iconButton} aria-label="search" disabled={disabled}>
        <SearchIcon />
      </IconButton>

    </Paper>
  )
}

SearchInputProps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchInputProps);




