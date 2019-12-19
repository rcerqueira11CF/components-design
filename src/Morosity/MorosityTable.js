import React from "react";
import MUIDataTable from "mui-datatables";
// import DangerCircleBtn from "../commons/DangerCircleBtn";
// import SmallSecondaryCircleTableBtn from "../commons/SmallSecondaryCircleTableBtn";
// import SmallSecondaryBtn from "../commons/SmallSecondaryBtn";
// import MultipleOptionsTableBtn from "../commons/MultipleOptionsTableBtn";
// import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
// import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NewPaymentModal from "../NewPaymentModal/PaymentModal";
import TableOptions from "./TableOptions";
import MorosityTableOptions from './MorosityTableOptions'
import OptionFilterLink from "../commons/OptionFilterLink";


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
    const columns = [
      { name: "id", options: { display: "excluded" } },
      "Unidad",
      "Copropietario",
      "Pendiente",
      "Meses",
      // {
      //   name: "Column name",
      //   options: {
      //     customHeadRender: ({index, ...column}) => {
      //       console.log(column)
      //       return (
      //         <MorosityOption />

      //       )
      //     }
      //   }
      // },
      {
        name: "Acción",
        options: {
          filter: false,
          sort: false,
          empty: true,
          print: false,
          download: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <React.Fragment>
                <span>

                  <MorosityTableOptions
                    idPayment={data[tableMeta.rowIndex][0]}
                    idCommunity={this.state.idCommunity}
                  />
                </span>

              </React.Fragment>
            );
          }
        }
      }
    ];

    const data = [
      ["100", "Q308", "Jemima", "83418", "6"],
      ["101", "D735", "Price", "85224", "4"],
      ["102", "I918", "Kenyon", "86185", "12"],
      ["103", "F313", "Orlando", "89762", "10"],
      ["104", "G361", "Boris", "81873", "6"],
      ["105", "K677", "Tanner", "87158", "9"],
      ["106", "J565", "Madeson", "80099", "11"],
      ["107", "C585", "Harriet", "84386", "4"],
      ["108", "G273", "Audra", "88217", "8"],
      ["109", "X121", "Claudia", "86142", "1"],
      ["110", "I232", "Fulton", "86573", "11"],
      ["111", "S850", "Xaviera", "84932", "9"],
      ["112", "Y563", "Zorita", "89116", "4"],
      ["113", "F110", "Jasmine", "87412", "11"],
      ["114", "V831", "Bert", "87903", "10"],
      ["115", "S412", "Larissa", "83289", "4"],
      ["116", "K098", "Armando", "83168", "10"],
      ["117", "E145", "Kaye", "80976", "5"],
      ["118", "Y130", "Ivor", "85626", "3"],
      ["119", "H254", "Kiayada", "85754", "3"],
      ["120", "G935", "Kai", "83654", "7"],
      ["121", "U560", "Eden", "89388", "2"],
      ["122", "H657", "Colt", "85861", "11"],
      ["123", "Q937", "Hannah", "87318", "3"],
      ["124", "Y035", "Hop", "85430", "11"],
      ["125", "O660", "Kane", "82227", "4"],
      ["126", "B244", "Ulla", "83726", "6"],
      ["127", "Y099", "Mara", "87438", "3"],
      ["128", "C846", "Alan", "85546", "9"],
      ["129", "B011", "Noah", "80508", "5"],
      ["130", "D842", "Lane", "81240", "8"],
      ["131", "E747", "Ifeoma", "86391", "10"],
      ["132", "A007", "Drew", "86899", "5"],
      ["133", "Z708", "Adara", "86990", "12"],
      ["134", "E572", "Echo", "88634", "1"],
      ["135", "L521", "Gay", "80774", "8"],
      ["136", "U872", "Jordan", "82271", "10"],
      ["137", "E975", "Xena", "87833", "10"],
      ["138", "I945", "Georgia", "87528", "7"],
      ["139", "Q998", "Dale", "83275", "2"],
      ["140", "K527", "Ciaran", "85220", "8"],
      ["141", "T917", "Ulric", "81121", "6"],
      ["142", "G969", "Talon", "80309", "4"],
      ["143", "Z833", "Raya", "88429", "1"],
      ["144", "L417", "Caryn", "86093", "3"],
      ["145", "Q547", "Nicholas", "89441", "11"],
      ["146", "Z504", "Rama", "86272", "12"],
      ["147", "Q237", "Rahim", "87949", "2"],
      ["148", "H047", "Ulysses", "87594", "1"],
      ["149", "C619", "Dawn", "84800", "1"],
      ["150", "F604", "Vera", "89926", "3"],
      ["151", "T468", "Magee", "80588", "12"],
      ["152", "B945", "Callum", "84616", "10"],
      ["153", "D910", "August", "81193", "6"],
      ["154", "Z095", "Farrah", "88664", "12"],
      ["155", "M973", "Carissa", "86149", "10"],
      ["156", "O057", "Hoyt", "87514", "11"],
      ["157", "A342", "Colorado", "83363", "7"],
      ["158", "X302", "Nathan", "86474", "10"]
    ];


    const options = {
      filterType: "dropdown",
      responsive: "scrollFullHeight",
      elevation: 0,
      filter: false,
      print: false,
      viewColumns: false,
      download: false,
      customToolbar: () => {
        return <TableOptions
          idCommunity={9}
          month={"02"}
          year={2019}
          tableSwitcher={
            <OptionFilterLink
              key="recaudationTable"
              label="Tabla de recaudación"
              onClick={this.props.tableSwitcher}
            />
          }
        />;
      }
    };



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
