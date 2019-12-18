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

function importExcelHandler() {
  alert("importExcel");
}

function downloadExcelHandler() {
  alert("downloadExcel");
}

function ExcelHandler(props) {
  const { classes } = props;
  return (
    <span key="bb" className={classes.root}>
      <span>
        <SecondaryBtn label="Importar excel" onClick={importExcelHandler} />
      </span>
      <span className={classes.marginLeft}>
        <SecondaryBtn label="Descarga excel" onClick={downloadExcelHandler}/>
      </span>
    </span>
  );
}

ExcelHandler.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExcelHandler);
