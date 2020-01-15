import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    backgroundColor: "#89cbf4",
    opacity: 0.6
  }
});

function getRows(paymentID) {
  switch (paymentID) {
    case 1:
      return [
        {
          id: 1,
          description: "Gasto común febrero 2019",
          amount: 130.414,
          payed: 0,
          balance: 130414,
          expirationDate: "30/05/2019",
          delayedMonths: 2
        },
        {
          id: 5,
          description: "Gasto común febrero 2019",
          amount: 130.344,
          payed: 0,
          balance: 131.234,
          expirationDate: "30/07/2019",
          delayedMonths: 2
        }
      ];
    case 2:
      return [
        {
          id: 2,
          description: "Gasto común marzo 2019",
          amount: 230.414,
          payed: 0,
          balance: 230.414,
          expirationDate: "30/05/2019",
          delayedMonths: 2
        },
        {
          id: 3,
          description: "Gasto común marzo 2019",
          amount: 330.344,
          payed: 0,
          balance: 431.234,
          expirationDate: "30/07/2019",
          delayedMonths: 2
        }
      ];
    default:
      return [
        {
          id: 1,
          description: "Gasto común febrero 2019",
          amount: 130.414,
          payed: 0,
          balance: 130414,
          expirationDate: "30/05/2019",
          delayedMonths: 2
        },
        {
          id: 5,
          description: "Gasto común febrero 2019",
          amount: 130.344,
          payed: 0,
          balance: 131.234,
          expirationDate: "30/07/2019",
          delayedMonths: 2
        }
      ];
  }
}

export default function SpanningTable(props) {
  const classes = useStyles();
  const { paymentID, handleClose } = props;
  const rows = getRows(paymentID);
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={5}>
              <b>Deudas</b>
            </TableCell>
            <div
              onClick={handleClose}
              style={{
                float: "right",
                cursor: "pointer",
                marginTop: "5px",
                marginRight: "5px"
              }}
            >
              <CloseIcon />
            </div>
          </TableRow>
          <TableRow>
            <TableCell> Prioridad de pago </TableCell>
            <TableCell align="right"> Monto </TableCell>
            <TableCell align="right"> Pagado </TableCell>
            <TableCell align="right"> Saldo </TableCell>
            <TableCell> Fecha de expiración </TableCell>
            <TableCell align="left"> Meses de atraso </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.payed}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell>{row.expirationDate}</TableCell>
              <TableCell align="left">{row.delayedMonths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
