import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CloseIcon from "@material-ui/icons/Close";

class DebsStructureTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalAmount: 0,
      totalPayed: 0,
      totalBalance: 0
    };
  }

  componentDidMount() {
    this.fetchDataTable(this.props.paymentID)
      .then(this.refreshTableData)
      .then(this.calculateTotals);
  }

  fetchDataTable = paymentID => {
    return new Promise((resolve, reject) => {
      if (true) {
        var mockupData = [];
        switch (paymentID) {
          case 1:
            mockupData = [
              {
                id: 1,
                paymentPriority: 1,
                description: "Gasto común febrero 2019",
                amount: 130414,
                payed: 0,
                balance: 130414,
                expirationDate: "30/05/2019",
                delayedMonths: 2
              },
              {
                id: 5,
                paymentPriority: 5,
                description: "Gasto común febrero 2019",
                amount: 130344,
                payed: 0,
                balance: 131234,
                expirationDate: "30/07/2019",
                delayedMonths: 2
              }
            ];
            break;
          case 2:
            mockupData = [
              {
                id: 2,
                paymentPriority: 2,
                description: "Gasto común marzo 2019",
                amount: 230414,
                payed: 0,
                balance: 230414,
                expirationDate: "30/05/2019",
                delayedMonths: 2
              },
              {
                id: 3,
                paymentPriority: 3,
                description: "Gasto común marzo 2019",
                amount: 330344,
                payed: 0,
                balance: 431234,
                expirationDate: "30/07/2019",
                delayedMonths: 2
              }
            ];
            break;
          default:
            mockupData = [
              {
                id: 1,
                paymentPriority: 1,
                description: "Gasto común febrero 2019",
                amount: 15000,
                payed: 1560,
                balance: 100000,
                expirationDate: "30/05/2019",
                delayedMonths: 2
              },
              {
                id: 5,
                paymentPriority: 5,
                description: "Gasto común febrero 2019",
                amount: 130344,
                payed: 0,
                balance: 131234,
                expirationDate: "30/07/2019",
                delayedMonths: 2
              }
            ];
        }
        resolve(mockupData);
      } else {
        reject("There was a problem");
      }
    });
  };

  refreshTableData = res => this.setState({ data: res });

  calculateTotals = () => {
    const res = this.state.data;
    if (Array.isArray(res) && res.length) {
      const totalAmount = res
        .map(({ amount }) => amount)
        .reduce((sum, i) => sum + i, 0);
      const totalPayed = res
        .map(({ payed }) => payed)
        .reduce((sum, i) => sum + i, 0);
      const totalBalance = res
        .map(({ balance }) => balance)
        .reduce((sum, i) => sum + i, 0);

      this.setState({
        totalAmount: totalAmount,
        totalPayed: totalPayed,
        totalBalance: totalBalance
      });
    }
  };

  render() {
    return (
      <TableContainer>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell> Prioridad de pago </TableCell>
              <TableCell> Descripción </TableCell>
              <TableCell align="right"> Monto </TableCell>
              <TableCell align="right"> Pagado </TableCell>
              <TableCell align="right"> Saldo </TableCell>
              <TableCell> Fecha de expiración </TableCell>
              <TableCell align="left"> Meses de atraso </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.paymentPriority}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.payed}</TableCell>
                <TableCell align="right">{row.balance}</TableCell>
                <TableCell>{row.expirationDate}</TableCell>
                <TableCell align="left">{row.delayedMonths}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell align="left">Total</TableCell>
              <TableCell align="right">{this.state.totalAmount}</TableCell>
              <TableCell align="right">{this.state.totalPayed}</TableCell>
              <TableCell align="right">{this.state.totalBalance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default DebsStructureTable;
