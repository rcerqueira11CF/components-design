import React from "react";
import MaterialTable from "material-table";
import PaymentRowInfo from "./PaymentRowInfo";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Fecha", field: "date", editable: "never" },
      { title: "Monto", field: "amount", editable: "never" },
      { title: "Folio", field: "folio", type: "numeric", editable: "never" },
      {
        title: "Medio ",
        field: "paymentType",
        lookup: {
          1: "Cheque",
          2: "Transferencia",
          3: "Efectivo",
          4: "Depósito",
          5: "RedCompra",
          6: "Webpay",
          7: "Ajuste"
        }
      },
      { title: "Nº documento", field: "documentNumber", type: "numeric" },
      { title: "Comentario", field: "comment" }
    ],
    data: [
      {
        paymentID: 1,
        date: "13/02/2019",
        amount: 11331,
        folio: 12,
        paymentType: 1,
        documentNumber: 1232,
        comment: "no coment"
      },
      {
        paymentID: 2,
        date: "14/02/2019",
        amount: 131,
        folio: 44,
        paymentType: 2,
        documentNumber: 192,
        comment: "coment"
      },
      {
        paymentID: 44,
        date: "14/02/2019",
        amount: 13441,
        folio: 434,
        paymentType: 6,
        documentNumber: 1932
      }
    ]
  });

  return (
    <MaterialTable
      columns={state.columns}
      data={state.data}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
      detailPanel={rowData => {
        return <PaymentRowInfo paymentId={rowData.paymentID} />;
      }}
      options={{
        actionsColumnIndex: -1,
        search: false,
        showTitle: false,
        toolbar: false
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  );
}
