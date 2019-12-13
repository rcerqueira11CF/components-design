import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DynamicTab from "../commons/DynamicCustomBar";
import OptionFilterLink from "../commons/OptionFilterLink";
import WTable from "../WTable";
require("typeface-montserrat");

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
};

function hello() {
  alert("hello");
}

function LinksTabs(props) {
  const { classes } = props;
  return (
    <div key="bb" className={classes.root}>
      <OptionFilterLink
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
      />
    </div>
  );
}

LinksTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinksTabs);
