import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import SecondaryBtn from "../commons/SecondaryBtn";
import RecaudationOptions from "./RecaudationOptions";
require("typeface-montserrat");

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
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

function TableOptions(props) {
  const { classes, tableSwitcher, idCommunity } = props;
  return (
    <span key="bb" className={classes.root}>
      <span>
        {tableSwitcher}
      </span>
      <span className={classes.marginLeft}>
        <RecaudationOptions idCommunity={idCommunity }/>
      </span>
    </span>
  );
}

TableOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableOptions);
