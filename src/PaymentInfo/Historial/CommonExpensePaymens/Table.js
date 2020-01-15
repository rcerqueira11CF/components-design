import React, { Component } from "react";
import MaterialTable from "material-table";
import SmallCircleTableBtn from "../../../commons/SmallCircleTableBtn";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

class MaterialTableDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Fecha", field: "date", editable: "never" },
        { title: "Cargo", field: "property_fine", editable: "never" },
        {
          title: "Abono",
          field: "payment",
          type: "numeric",
          editable: "never"
        },
        { title: "Descripción ", field: "description", editable: "never" },
        { title: "Saldo", field: "balance", type: "numeric", editable: "never" }
      ],
      data: []
    };
  }

  fetchDataTable = showNullifiedPayments => {
    return new Promise((resolve, reject) => {
      const allData = [
        {
          paymentID: 1,
          date: "13/02/2019",
          property_fine: 12,
          payment: 11331,
          description: "Pago por efectivo, folio: 222 - Pagado el: 27 jul 2019",
          balance: 1232
        },
        {
          paymentID: 2,
          date: "14/02/2019",
          property_fine: 44,
          payment: 131,
          description: "Pago Anulado, folio: 222 - Pagado el: 27 jul 2019",
          balance: 192
        },
        {
          paymentID: 44,
          date: "14/02/2019",
          property_fine: 434,
          payment: 13441,
          description: "Pago por efectivo, folio: 222 - Pagado el: 27 jul 2019",
          balance: 1932
        }
      ];
      const noAllData = [
        {
          paymentID: 1,
          date: "13/02/2019",
          property_fine: 12,
          payment: 11331,
          description: "Pago por efectivo, folio: 222 - Pagado el: 27 jul 2019",
          balance: 1232
        },
        {
          paymentID: 44,
          date: "14/02/2019",
          property_fine: 434,
          payment: 13441,
          description: "Pago por efectivo, folio: 222 - Pagado el: 27 jul 2019",
          balance: 1932
        }
      ];
      if (true) {
        const dataToShow = showNullifiedPayments ? allData : noAllData;
        resolve(dataToShow);
      } else {
        reject("There was a problem");
      }
    });
  };

  componentDidMount() {
    this.fetchDataTable(this.props.showNullifiedPayments).then(
      this.refreshTableData
    );
  }

  refreshTableData = res => this.setState({ data: res });

  componentWillReceiveProps(props) {
    const { showNullifiedPayments } = this.props;
    if (props.showNullifiedPayments !== showNullifiedPayments) {
      this.fetchDataTable(showNullifiedPayments).then(this.refreshTableData);
    }
  }

  handleDownloadExcel = paymentID => {
    alert("Download " + paymentID);
  };
  render() {
    return (
      <MaterialTable
        columns={this.state.columns}
        data={this.state.data}
        options={{
          actionsColumnIndex: -1,
          search: false,
          showTitle: false,
          toolbar: false
        }}
        actions={[
          {
            icon: "save_alt",
            tooltip: "Descargar",
            onClick: (event, rowData) => {
              this.handleDownloadExcel(rowData.paymentID);
            }
          }
        ]}
        components={{
          Action: props => (
            <SmallCircleTableBtn
              iconBtn={<GetAppRoundedIcon />}
              onClick={event => props.action.onClick(event, props.data)}
            />
          )
        }}
        localization={{
          header: {
            actions: "Descargar"
          }
        }}
      />
    );
  }
}

export default MaterialTableDemo;
