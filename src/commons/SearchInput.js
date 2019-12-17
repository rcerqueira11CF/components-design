import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
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
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  iconButton: {
    marginRight: theme.spacing(0.5),
    padding: 5,
  },
}));

export default function SearchBtn() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search google maps' }}
        disable={this.props.disabled}
        {...props}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}
