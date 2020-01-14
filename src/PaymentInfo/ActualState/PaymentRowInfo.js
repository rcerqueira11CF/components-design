import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    backgroundColor: "#89cbf4",
    opacity: 0.6
  }
});

function subtotal(items) {
  return items
    .map(({ assignedAmount }) => assignedAmount)
    .reduce((sum, i) => sum + i, 0);
}

function getRows(paymentID) {
  switch (paymentID) {
    case 1:
      return [
        {
          id: 1,
          assignedAmount: 1131,
          date: "13/02/2019",
          debtDescription:
            "Gasto común febrero 2019 egresos + medidores + remuneraciones",
          debtAmount: 65000,
          debtBalance: 0
        },
        {
          id: 36,
          assignedAmount: 131,
          date: "14/02/2019",
          debtDescription:
            "Gasto común febrero 2019 egresos + medidores + remuneraciones",
          debtAmount: 65000,
          debtBalance: 0
        },
        {
          id: 22,
          assignedAmount: 13441,
          date: "14/02/2019",
          debtDescription:
            "Gasto común febrero 2019 egresos + medidores + remuneraciones",
          debtAmount: 42000,
          debtBalance: 22222
        }
      ];
    case 2:
      return [
        {
          id: 2,
          assignedAmount: 222,
          date: "13/02/2019",
          debtDescription:
            "Gasto común febrero 2019 egresos + medidores + remuneraciones",
          debtAmount: 65000,
          debtBalance: 0
        },
        {
          id: 44,
          assignedAmount: 3333,
          date: "14/02/2019",
          debtDescription:
            "Gasto común febrero 2019 egresos + medidores + remuneraciones",
          debtAmount: 65000,
          debtBalance: 0
        },
        {
          id: 33,
          assignedAmount: 4444,
          date: "14/02/2019",
          debtDescription:
            "Gasto común febrero 2019 egresos + medidores + remuneraciones",
          debtAmount: 42000,
          debtBalance: 22222
        }
      ];
    default:
      return [];
  }
}

function composeRows(rows, totalDebtAmount) {
  if (rows.length <= 0) {
    return <center>No hay información para mostrar</center>;
  } else {
    return (
      <React.Fragment>
        {rows.map(row => (
          <TableRow key={row.desc}>
            <TableCell align="right">{row.assignedAmount}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.debtDescription}</TableCell>
            <TableCell align="right">{row.debtAmount}</TableCell>
            <TableCell align="right">{row.debtBalance}</TableCell>
          </TableRow>
        ))}

        <TableRow>
          <TableCell align="right">{totalDebtAmount}</TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}

export default function SpanningTable(props) {
  const classes = useStyles();
  const { paymentId } = props;
  const rows = getRows(paymentId);
  const totalDebtAmount = subtotal(rows);
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Monto asignado</TableCell>
            <TableCell>Fecha de asignación</TableCell>
            <TableCell>Deuda</TableCell>
            <TableCell align="right">Monto de deuda</TableCell>
            <TableCell align="right">Saldo en deuda</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{composeRows(rows, totalDebtAmount)}</TableBody>
      </Table>
    </TableContainer>
  );
}
