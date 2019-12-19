import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    justifyContent: "center",
    width: 100,
    height: 30,
    borderRadius: 20,
    border: "solid 1px #0ecb68",
    color: "#0ecb68",
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: 600,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 0.61,
    letterSpacing: "normal",
    backgroundColor: "#ffffff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#eaeaea"
    },
    "&:disabled": {
      color: "#0ecb68",
      opacity: 0.4
    }
  }
};

function SecondaryBtn(props) {
  const { classes, label, handleClick, disabled } = props;
  return (
    <Button
      className={classes.root}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </Button>
  );
}

SecondaryBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SecondaryBtn);
