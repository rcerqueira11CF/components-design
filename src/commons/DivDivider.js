import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    borderLeft: '2px solid #eaeaea',
    opacity: '0.6',
    height: '50px',
  }
};

function Divider(props){
  const {
    classes,
  } = props;
  return (
    <div className={classes.root}></div>
  );
}

Divider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Divider);