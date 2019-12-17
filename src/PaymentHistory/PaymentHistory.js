import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DynamicTab from "../commons/DynamicCustomBar";
import OptionFilterLink from "../commons/OptionFilterLink";
import PaymentHistoryTable from "./PaymentHistoryTable";
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
  this.setState(false);
}

function PaymentHistory(props) {
  const { classes, idCommunity } = props;

  const [state, setState] = React.useState({
    allPayment: true,
    paymentNotNotified: false,
    paymentNotRecognized: false,
    nullifiedPayments: false
  });
  return (
    <div>
      <DynamicTab boxInfos={tabInfo} />
      <br />
      <Paper elevation="0">
        <div className={classes.paperContent}>
          <OptionFilterLink
            key="allPayment"
            label="Todos los pagos"
            active={state.allPayment}
            onClick={hello}
          />
          <OptionFilterLink
            key="paymentNotNotified"
            label="Pagos no notificados"
            active={state.paymentNotNotified}
            onClick={hello}
          />
          <OptionFilterLink
            key="paymentNotRecognized"
            label="Pagos no reconocidos"
            active={state.paymentNotRecognized}
            onClick={hello}
          />
          <OptionFilterLink
            key="nullifiedPayments"
            label="Pagos anulados"
            active={state.nullifiedPayments}
            onClick={hello}
          />
        </div>
        <br />
        <div><PaymentHistoryTable idCommunity={idCommunity} /></div>
      </Paper>
    </div>
  );
}

PaymentHistory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaymentHistory);
