import React from "react";
import MaterialTable from "material-table";
import SmallCircleTableBtn from "../../../commons/SmallCircleTableBtn";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Fecha", field: "date", editable: "never" },
      { title: "Cargo", field: "property_fine", editable: "never" },
      { title: "Abono", field: "payment", type: "numeric", editable: "never" },
      { title: "Descripción ", field: "description", editable: "never" },
      { title: "Saldo", field: "balance", type: "numeric", editable: "never" }
    ],
    data: [
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
        description: "Pago por efectivo, folio: 222 - Pagado el: 27 jul 2019",
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
    ]
  });

  return (
    <MaterialTable
      columns={state.columns}
      data={state.data}
      // detailPanel={rowData => {
      //   return <PaymentRowInfo paymentId={rowData.paymentID} />;
      // }}
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
            alert(rowData.paymentID);
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
