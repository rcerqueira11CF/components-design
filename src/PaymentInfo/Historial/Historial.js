import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import OptionFilterLink from "../../commons/subCommons/OptionFilterLink";
import CommonExpensePayment from "./CommonExpensePaymens/CommonExpensePayments";

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

function PaymentHistory(props) {
  const { classes, idCommunity } = props;

  const [state, setState] = React.useState({
    commonExpensesPayments: true,
    paymentAssignment: false,
    debtStructure: false,
    interests: false
  });

  function toggleLinks(link) {
    //alert("interests")
    setState({
      commonExpensesPayments: false,
      paymentAssignment: false,
      debtStructure: false,
      interests: false
    });

    link === "commonExpensesPayments" &&
      setState({ commonExpensesPayments: true });
    link === "paymentAssignment" && setState({ paymentAssignment: true });
    link === "debtStructure" && setState({ debtStructure: true });
    link === "interests" && setState({ interests: true });
  }

  function showTable() {
    if (state.commonExpensesPayments)
      return <CommonExpensePayment idCommunity={idCommunity} />;
    // if (state.paymentAssignment)
    //   return <NotNotifiedPaymentsTable idCommunity={idCommunity} />;
    // if (state.debtStructure)
    //   return <NotRecognizedPaymentsTable idCommunity={idCommunity} />;
    // if (state.interests)
    //   return <NullifiedPaymentsTable idCommunity={idCommunity} />;
  }
  return (
    <div>
      <Paper elevation={0}>
        <div className={classes.paperContent}>
          <OptionFilterLink
            key="commonExpensesPayments"
            label="Todos los pagos"
            active={state.commonExpensesPayments}
            onClick={() => {
              toggleLinks("commonExpensesPayments");
            }}
          />
          <OptionFilterLink
            key="paymentAssignment"
            label="Pagos no notificados"
            active={state.paymentAssignment}
            onClick={() => {
              toggleLinks("paymentAssignment");
            }}
          />
          <OptionFilterLink
            key="debtStructure"
            label="Pagos no reconocidos"
            active={state.debtStructure}
            onClick={() => {
              toggleLinks("debtStructure");
            }}
          />
          <OptionFilterLink
            key="interests"
            label="Pagos anulados"
            active={state.interests}
            onClick={() => {
              toggleLinks("interests");
            }}
          />
        </div>
        <div>{showTable()}</div>
      </Paper>
    </div>
  );
}

PaymentHistory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaymentHistory);
