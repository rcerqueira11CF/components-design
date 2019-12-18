import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import SecondaryBtn from "../commons/SecondaryBtn";
require("typeface-montserrat");

const styles = {
  root: {
    display: "flex",
    float: "right"
  },
  marginLeft: {
    marginLeft: "5px"
  }
};

function notifyAllHandler() {
  alert("notify all");
}

function downloadExcelHandler() {
  alert("downloadExcel");
}

function TableOptions(props) {
  const { classes } = props;
  return (
    <span key="bb" className={classes.root}>
      <span>
        <SecondaryBtn label="Notificar a todos" onClick={notifyAllHandler} />
      </span>
      <span className={classes.marginLeft}>
        <SecondaryBtn label="Descarga excel" onClick={downloadExcelHandler}/>
      </span>
    </span>
  );
}

TableOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableOptions);
