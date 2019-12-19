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
import RecaudationTableOptions from './RecaudationTableOptions'
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
      "A pagar",
      "Pagado",
      "Pendiente",
      // {
      //   name: "Column name",
      //   options: {
      //     customHeadRender: ({index, ...column}) => {
      //       console.log(column)
      //       return (
      //         <TableOptions />

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

                  <RecaudationTableOptions
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

    const data = [["100", "T936", "Flavia", "80178", "44655", "13241"],
    ["101", "D731", "Cassandra", "81918", "46867", "32693"],
    ["102", "M924", "Uriel", "84717", "39248", "25769"],
    ["103", "N412", "Carissa", "83867", "47667", "32715"],
    ["104", "A024", "Uriel", "87674", "32200", "29219"],
    ["105", "U543", "Abbot", "86339", "45118", "18301"],
    ["106", "Q905", "Juliet", "80245", "42606", "13843"],
    ["107", "N100", "Nathan", "84478", "36832", "14302"],
    ["108", "I724", "Justine", "87943", "48573", "14493"],
    ["109", "G420", "Nora", "88920", "49480", "33779"],
    ["110", "Z225", "Nayda", "89278", "35516", "9708"],
    ["111", "O390", "Kiona", "89745", "37667", "36611"],
    ["112", "R750", "Steven", "83863", "44845", "34529"],
    ["113", "R371", "Uriah", "88339", "32806", "10371"],
    ["114", "S436", "Imogene", "85081", "35193", "431"],
    ["115", "S470", "Chava", "88455", "42498", "23853"],
    ["116", "W778", "Jena", "89689", "32527", "33675"],
    ["117", "A835", "Leila", "80672", "49210", "37978"],
    ["118", "W861", "Whoopi", "87395", "42643", "11235"],
    ["119", "S311", "Colorado", "80694", "49934", "29970"],
    ["120", "R156", "Axel", "86004", "45407", "38176"],
    ["121", "H367", "Jin", "89949", "44448", "37080"],
    ["122", "Q620", "Mannix", "83186", "46041", "1429"],
    ["123", "O529", "Sophia", "88147", "31660", "24505"],
    ["124", "O333", "Lesley", "85169", "32092", "17412"],
    ["125", "L467", "Merritt", "89910", "44222", "4762"],
    ["126", "X294", "Aimee", "85199", "48217", "24895"],
    ["127", "V970", "Shad", "81876", "44794", "24195"],
    ["128", "E447", "Samson", "85728", "31952", "22160"],
    ["129", "M687", "Galvin", "83245", "35796", "17137"],
    ["130", "L712", "Faith", "85692", "39749", "36596"],
    ["131", "O029", "Emma", "84252", "36690", "30123"],
    ["132", "X403", "Orli", "82929", "35887", "1168"],
    ["133", "R160", "Kitra", "88354", "44056", "25030"],
    ["134", "T362", "Yoshi", "80443", "35726", "30413"],
    ["135", "G328", "Risa", "87874", "47969", "8055"],
    ["136", "S887", "Haviva", "80578", "47892", "38628"],
    ["137", "S212", "Tana", "82255", "32780", "38253"],
    ["138", "A791", "Chancellor", "88602", "48202", "6279"],
    ["139", "R857", "Shelby", "85236", "42697", "37034"],
    ["140", "N449", "Aileen", "89612", "31610", "35129"],
    ["141", "L321", "Selma", "86721", "33004", "8376"],
    ["142", "D922", "Carla", "89124", "46288", "5075"],
    ["143", "C550", "Carlos", "83169", "45923", "24885"],
    ["144", "V129", "Abraham", "80602", "39195", "26917"],
    ["145", "F166", "Britanney", "85060", "37857", "9872"],
    ["146", "M981", "Raja", "89742", "40711", "10684"],
    ["147", "Y547", "Dahlia", "86896", "39066", "25707"],
    ["148", "Y503", "Tyler", "89648", "32022", "31343"],
    ["149", "Q253", "Brett", "89985", "36538", "20350"],
    ["150", "K206", "Cullen", "83118", "37901", "33136"],
    ["151", "L638", "Felicia", "81710", "49804", "34059"],
    ["152", "L730", "Piper", "87849", "48013", "39768"],
    ["153", "O875", "Imani", "82410", "45403", "17076"],
    ["154", "A882", "Mari", "83768", "33799", "3134"],
    ["155", "R861", "TaShya", "87438", "42417", "5329"],
    ["156", "I810", "Vernon", "84523", "43806", "4243"],
    ["157", "A202", "Kennan", "87980", "37086", "18284"],
    ["158", "G454", "Chelsea", "81999", "33779", "1029"],
    ["159", "O566", "Grady", "88857", "37756", "7780"],
    ["160", "C710", "Hop", "89276", "48055", "6235"],
    ["161", "O116", "Anastasia", "83756", "48444", "30401"]];


    const options = {
      filterType: "dropdown",
      responsive: "scrollFullHeight",
      elevation: 0,
      filter: false,
      print: false,
      viewColumns: false,
      download: false,
      customToolbar: () => {
        return (
        <TableOptions
          idCommunity={9}
          month={"02"}
          year={2019}
          tableSwitcher={
            <OptionFilterLink
              key="morosityTable"
              label="Tabla de morosos"
              onClick={() => this.props.tableSwitcher("morosityTable")}
            />
          }
        />);
      }
    };



    function headerIcons() {
      return (
        <React.Fragment>
          <NewPaymentModal idCommunity={9} />
        </React.Fragment>
      );
    }
    function tableSwitch() {
      return (
        <React.Fragment>
          <OptionFilterLink
            key="recaudationTable"
            label="Tabla de morosos"
            onClick={this.props.tableSwitcher}
          />
        </React.Fragment>
      );
    }

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={headerIcons()}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}

export default CustomTable;
