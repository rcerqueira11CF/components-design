import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import OptionFilterLink from "../../commons/subCommons/OptionFilterLink";
import CommonExpensePayment from "./CommonExpensePaymens/CommonExpensePayments";
import PaymentAssignment from "./PaymentAssignment/PaymentAssignment";
import DebtStructure from "./DebtStructure/DebtStructure";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "none"
  },
  linkContainer: {
    display: "flex",
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
    if (state.paymentAssignment)
      return <PaymentAssignment idCommunity={idCommunity} />;
    if (state.debtStructure)
      return <DebtStructure idCommunity={idCommunity} paymentID={2} />;
    // if (state.interests)
    //   return <NullifiedPaymentsTable idCommunity={idCommunity} />;
  }
  return (
    <div>
      <Paper elevation={0}>
        <div className={classes.paperContent}>
          <OptionFilterLink
            key="commonExpensesPayments"
            label="Gastos comunes y pagos"
            active={state.commonExpensesPayments}
            onClick={() => {
              toggleLinks("commonExpensesPayments");
            }}
          />
          <OptionFilterLink
            key="paymentAssignment"
            label="Asignación de pagos"
            active={state.paymentAssignment}
            onClick={() => {
              toggleLinks("paymentAssignment");
            }}
          />
          <OptionFilterLink
            key="debtStructure"
            label="Estructura de deuda"
            active={state.debtStructure}
            onClick={() => {
              toggleLinks("debtStructure");
            }}
          />
          <OptionFilterLink
            key="interests"
            label="Intereses y multas"
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
