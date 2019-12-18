import React from "react";
import MUIDataTable from "mui-datatables";
// import ReactDOM from "react-dom";
// import DangerCircleBtn from "../commons/DangerCircleBtn";
// import MultipleOptionsTableBtn from "../commons/MultipleOptionsTableBtn";
// import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NewPaymentModal from "../NewPaymentModal/PaymentModal";
import NullifiedPaymentsTableOptions from "./NullifiedPaymentsTableOptions";
import TableOptions from "./TableOptions";

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
    const data = [["42","72224","Yardley","370","$4316.99","07/30/19","12/24/19","07/07/20","Transferenhia","2593","dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet","Aug 12, 2020"],
    ["43","02986","Echo","379","$1349.86","05/27/19","12/23/19","01/06/20","Transferenqia","4247","fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem","Dec 24, 2019"],
    ["44","53598","Emerson","388","$3731.91","08/17/19","12/25/19","06/24/20","Transferenria","2236","nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras","Dec 8, 2019"],
    ["45","00811","Xavier","397","$2798.45","12/11/19","12/27/19","10/16/20","Transferensia","6485","dui. Cum sociis natoque penatibus et magnis dis parturient montes,","Apr 9, 2019"],
    ["46","51290","Rhea","406","$4182.24","12/03/19","12/20/19","03/23/20","Transferenzia","2126","massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius","Apr 24, 2019"],
    ["47","98407","Calista","415","$4820.97","03/15/19","12/26/19","09/03/20","Transferencia","2581","Praesent eu dui. Cum sociis natoque penatibus et magnis dis","Dec 8, 2019"],
    ["48","87728","Jade","424","$3207.21","06/29/19","12/30/19","06/06/20","Transferenhia","2032","eu tellus eu augue porttitor interdum. Sed auctor odio a","Jan 10, 2019"],
    ["49","53773","Conan","433","$8175.93","07/12/19","12/29/19","01/12/20","Transferenwia","2713","egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede.","Sep 1, 2019"],
    ["50","63328","Abraham","442","$1623.78","11/20/19","12/29/19","06/18/20","Transferensia","3500","ante ipsum primis in faucibus orci luctus et ultrices posuere","Feb 7, 2020"],
    ["51","53414","Jelani","451","$5304.20","07/13/19","12/18/19","07/18/20","Transferenfia","2610","augue, eu tempor erat neque non quam. Pellentesque habitant morbi","Dec 12, 2020"],
    ["52","37906","May","460","$9239.28","12/11/19","12/31/19","03/27/20","Transferensia","3605","mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet,","Aug 12, 2020"],
    ["53","15162","Griffin","469","$7023.41","04/15/19","12/30/19","01/27/20","Transferenwia","3882","accumsan neque et nunc. Quisque ornare tortor at risus. Nunc","Mar 23, 2020"],
    ["54","85077","Savannah","478","$2683.40","05/31/19","12/22/19","10/23/20","Transferensia","7086","pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus","Jul 30, 2020"],
    ["55","16933","Thor","487","$9992.05","10/11/19","12/30/19","07/01/20","Transferenvia","2714","felis. Donec tempor, est ac mattis semper, dui lectus rutrum","May 9, 2019"],
    ["56","54952","Armand","496","$7590.66","10/13/19","12/29/19","06/28/20","Transferenjia","4207","commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus","Dec 13, 2020"],
    ["57","81128","Yen","505","$1527.72","11/18/19","12/25/19","05/09/20","Transferenyia","7851","in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit","Apr 20, 2019"],
    ["58","93141","Jolene","514","$8646.55","08/01/19","12/27/19","07/15/20","Transferengia","7710","Proin sed turpis nec mauris blandit mattis. Cras eget nisi","Mar 17, 2019"],
    ["59","94717","Lisandra","523","$6913.71","12/15/19","12/24/19","10/19/20","Transferendia","6582","vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim.","May 8, 2019"],
    ["60","25670","Deirdre","532","$3220.11","02/01/19","12/31/19","10/14/20","Transferenfia","6109","ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede","Jan 9, 2019"]];

    const columns = [
      { name: "id", options: { display: "excluded" } },
      "Unidad",
      "Copropietario",
      "Folio",
      "Monto",
      "Fecha de pago",
      "Fecha de ingreso",
      "Fecha de anulación",
      "Medio de pago",
      "Número de documento",
      "Comentarios",
      "Periodo asociado",
      // {
      //   name: "Column name",
      //   options: {
      //     customHeadRender: ({index, ...column}) => {
      //       console.log(column)
      //       return (
      //         <PaymentHistoryOptions />
      //       )
      //     }
      //   }
      // },

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
                <NullifiedPaymentsTableOptions
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

    function headerIcons() {
      return (
        <React.Fragment>
          <NewPaymentModal idCommunity={9} />
        </React.Fragment>
      );
    }

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
