import React from "react";
import PropTypes from "prop-types";
// import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// import DynamicTab from "../commons/DynamicCustomBar";
import OptionFilterLink from "../commons/OptionFilterLink";
import SecondaryBtn from "../commons/SecondaryBtn";
// import WTable from "../WTable";
require("typeface-montserrat");

const styles = {
  root: {
    display: "flex",
    float: "right"
    // alignItems: "center"
    //justifyContent: "space-evenly"
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
        <SecondaryBtn label="Importar excel" />
      </span>
      <span className={classes.marginLeft}>
        <SecondaryBtn label="Descarga excel" />
      </span>
      {/* <OptionFilterLink
        key="allPayment"
        label="Todos los pagos"
        onClick={hello}
      />
      <OptionFilterLink
        key="paymentNotNotified"
        label="Pagos no notificados"
        onClick={hello}
      />
      <OptionFilterLink
        key="paymentNotRecognized"
        label="Pagos no reconocidos"
        onClick={hello}
      />
      <OptionFilterLink
        key="nullifiedPayments"
        label="Pagos anulados"
        onClick={hello}
      /> */}
    </span>
  );
}

ExcelHandler.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExcelHandler);
