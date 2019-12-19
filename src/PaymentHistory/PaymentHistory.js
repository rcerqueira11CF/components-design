import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DynamicTab from "../commons/DynamicCustomBar";
import OptionFilterLink from "../commons/OptionFilterLink";
import AllPaymentsTable from "../AllPayments/AllPaymentsTable"
import NotNotifiedPaymentsTable from "../NotNotifiedPayments/NoNotifiedPaymentsTable"
import NotRecognizedPaymentsTable from "../NotRecognizedPayments/NotRecognizedPaymentsTable"
import NullifiedPaymentsTable from "../NullifiedPayments/NullifiedPaymentsTable"

// import LinksTabs from "./LinksTabs";
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
    justifyContent: "center",
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



function PaymentHistory(props) {
  const { classes, idCommunity } = props;

  const [state, setState] = React.useState({
    allPayment: true,
    paymentNotNotified: false,
    paymentNotRecognized: false,
    nullifiedPayments: false
  });

  function toggleLinks(link) {
    //alert("nullifiedPayments")
    setState({
      allPayment: false,
      paymentNotNotified: false,
      paymentNotRecognized: false,
      nullifiedPayments: false
    });

    link === "allPayment" && setState({ allPayment : true})
    link === "paymentNotNotified" && setState({ paymentNotNotified : true})
    link === "paymentNotRecognized" && setState({ paymentNotRecognized : true})
    link === "nullifiedPayments" && setState({ nullifiedPayments : true})
  }

  function showTable(){
    if (state.allPayment) return <AllPaymentsTable idCommunity={idCommunity} />;
    if (state.paymentNotNotified) return <NotNotifiedPaymentsTable idCommunity={idCommunity} />;
    if (state.paymentNotRecognized) return <NotRecognizedPaymentsTable idCommunity={idCommunity} />;
    if (state.nullifiedPayments) return <NullifiedPaymentsTable idCommunity={idCommunity} />;
  }
  return (
    <div>
      Recaudado los últimos meses
      <DynamicTab boxInfos={tabInfo} />
      <br />
      <Paper elevation="0">
        <br />
        <div className={classes.paperContent}>
          <OptionFilterLink
            key="allPayment"
            label="Todos los pagos"
            active={state.allPayment}
            onClick={() => {
              toggleLinks("allPayment")
            }}
          />
          <OptionFilterLink
            key="paymentNotNotified"
            label="Pagos no notificados"
            active={state.paymentNotNotified}
            onClick={() => {
              toggleLinks("paymentNotNotified")
            }}
          />
          <OptionFilterLink
            key="paymentNotRecognized"
            label="Pagos no reconocidos"
            active={state.paymentNotRecognized}
            onClick={() => {
              toggleLinks("paymentNotRecognized")
            }}
          />
          <OptionFilterLink
            key="nullifiedPayments"
            label="Pagos anulados"
            active={state.nullifiedPayments}
            onClick={() => {
              toggleLinks("nullifiedPayments")
            }}
          />
        </div>
        <div>
          <br />
          {showTable()}
        </div>
      </Paper>
    </div>
  );
}

PaymentHistory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaymentHistory);
