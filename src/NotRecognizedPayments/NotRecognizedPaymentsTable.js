import React from "react";
import MUIDataTable from "mui-datatables";
// import ReactDOM from "react-dom";
// import DangerCircleBtn from "../commons/DangerCircleBtn";
// import MultipleOptionsTableBtn from "../commons/MultipleOptionsTableBtn";
// import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NotRecognizedPaymentsTableOptions from "./NotRecognizedPaymentsTableOptions";
import TableOptions from "./TableOptions";
import SearchInputProps from "../commons/SearchInputProps";


class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCommunity: this.props.idCommunity
    };
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiPaper: {
          root: {
            backgroundColor: "white"
          }
        },
        MUIDataTableHeadCell: {
          fixedHeader: {
            backgroundColor: "white"
          }
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: "white"
          }
        }
      }
    });

  render() {
    const data = [
      ["1","12/23/19","06/19/19","100","$1301.25","Transferencia","1477","vulputate eu, odio. Phasellus at augue id ante dictum cursus.","May 17, 2019"],
["3","10/11/20","09/18/19","1099","$6691.49","Transferencia","8028","dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales","Aug 9, 2019"],
["4","01/23/19","02/04/20","2098","$2672.79","Transferencia","6415","consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia","Feb 12, 2020"],
["8","09/13/19","04/21/19","3097","$4397.14","Transferencia","1269","sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor","Dec 17, 2020"],
["5","07/01/19","11/17/20","4096","$3767.02","Transferencia","4708","erat. Sed nunc est, mollis non, cursus non, egestas a,","Oct 7, 2020"],
["7","09/07/20","12/02/20","5095","$3717.48","Transferencia","9295","Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis","Jul 9, 2019"]
    ];

    const columns = [
      { name: "id", options: { display: "excluded" } },
      "Fecha de creacion",
      "Fecha de pago",
      "Folio",
      "Monto",
      {
        name: "Unidad",
        options: {
          filter: false,
          sort: false,
          empty: true,
          print: false,
          download: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <React.Fragment>
                <SearchInputProps placeholder="Buscar" />
                {/* <NotRecognizedPaymentsTableOptions */}
                  {/* idPayment={data[tableMeta.rowIndex][0]} */}
                  {/* idCommunity={this.state.idCommunity} */}
                {/* // /> */}
              </React.Fragment>
            );
          }
        }
      },
      "Medio de pago",
      "Número de documento",
      "Comentarios",
      "Periodo asociado",
      {
        name: "Opciones",
        options: {
          filter: false,
          sort: false,
          empty: true,
          print: false,
          download: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <React.Fragment>
                {/* <DangerCircleBtn
                  iconBtn={<DeleteForeverOutlinedIcon />}
                  onClick={() => {
                    const myId = data[tableMeta.rowIndex][0];
                    alert(myId);
                  }}
                />

                <button
                  onClick={() =>
                    window.alert(
                      `Clicked "Edit" for row ${data[tableMeta.rowIndex][0]}`
                    )
                  }
                >
                  Edit
                </button> */}
                <NotRecognizedPaymentsTableOptions
                  idPayment={data[tableMeta.rowIndex][0]}
                  idCommunity={this.state.idCommunity}
                />
              </React.Fragment>
            );
          }
        }
      }
    ];

    const options = {
      filter: false,
      print: false,
      viewColumns: false,
      download: false,
      filterType: "dropdown",
      responsive: "scrollFullHeight",
      elevation: 0,
      customToolbar: () => {
        return <TableOptions />;
      }
    };

    // function headerIcons() {
    //   return (
    //     <React.Fragment>
    //       <NewPaymentModal idCommunity={9} />
    //     </React.Fragment>
    //   );
    // }

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={""}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}

export default CustomTable;
