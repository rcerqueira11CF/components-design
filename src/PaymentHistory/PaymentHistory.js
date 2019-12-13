import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DynamicTab from "../commons/DynamicCustomBar";
import OptionFilterLink from "../commons/OptionFilterLink";
import WTable from "../WTable";
import LinksTabs from "./LinksTabs";
require("typeface-montserrat");

const styles = {
  root: {
    //display: "flex",
    //alignItems: "center",
    //justifyContent: "space-evenly"
  },
  paperContent: {
    padding: 16,
    //paddingBottom: 16,
    //display: "flex",
    //alignItems: "center",
    //justifyContent: "space-evenly",
    //backgroundColor: "#ffffff"
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    //backgroundColor: '#ffffff',
    boxShadow: "none"
  },
  linkContainer: {
    display: "flex",
    //paddingBottom: 16,
    alignItems: "center"
  }
};

const tabInfo = [
  {
    id: "1",
    titleText: "Diciembre",
    amountText: "$4.009.271"
  },
  {
    id: "2",
    titleText: "Enero",
    amountText: "$6.783.210"
  },
  {
    id: "3",
    titleText: "Febrero",
    amountText: "$5.892.000"
  }
];

function hello() {
  alert("hello");
}

function PaymentHistory(props) {
  const { classes } = props;
  return (
    <div>
      <DynamicTab boxInfos={tabInfo} />
      <br />
      <Paper elevation="0">
        <div className={classes.paperContent}>
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
        <div>
          <WTable />
        </div>
      </Paper>
    </div>
  );
}

PaymentHistory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaymentHistory);
