import React from "react";
import MUIDataTable from "mui-datatables";
import DangerCircleBtn from "../commons/DangerCircleBtn";
import MultipleOptionsTableBtn from "../commons/MultipleOptionsTableBtn";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NewPaymentModal from "../NewPaymentModal/PaymentModal";
import RecaudationOption from "./RecaudationOptions";

class CustomTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
      "Nombre",
      "Cargo",
      "Ubicación",
      "Edad",
      "Salario",
      // {
      //   name: "Column name",
      //   options: {
      //     customHeadRender: ({index, ...column}) => {
      //       console.log(column)
      //       return (
      //         <RecaudationOption />

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
                <DangerCircleBtn
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
                </button>
                <MultipleOptionsTableBtn
                  idObject={data[tableMeta.rowIndex][0]}
                />
              </React.Fragment>
            );
          }
        }
      }
    ];

    const data = [
      [
        1,
        "Gabby George",
        "Business Analyst",
        "Minneapolis",
        30,
        "$100,000",
        "asd"
      ],
      [
        2,
        "Aiden Lloyd",
        "Business Consultant",
        "Dallas",
        55,
        "$200,000",
        "asd"
      ],
      [3, "Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000", "asd"],
      [
        4,
        "Franky Rees",
        "Business Analyst",
        "St. Petersburg",
        22,
        "$50,000",
        "asd"
      ],
      [5, "Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000", "asd"],
      [
        6,
        "Blake Duncan",
        "Business Management Analyst",
        "San Diego",
        65,
        "$94,000",
        "asd"
      ],
      [
        7,
        "Frankie Parry",
        "Agency Legal Counsel",
        "Jacksonville",
        71,
        "$210,000",
        "asd"
      ],
      [
        8,
        "Lane Wilson",
        "Commercial Specialist",
        "Omaha",
        19,
        "$65,000",
        "asd"
      ],
      [
        9,
        "Robin Duncan",
        "Business Analyst",
        "Los Angeles",
        20,
        "$77,000",
        "asd"
      ],
      [
        10,
        "Mel Brooks",
        "Business Consultant",
        "Oklahoma City",
        37,
        "$135,000",
        "asd"
      ],
      [11, "Harper White", "Attorney", "Pittsburgh", 52, "$420,000", "asd"],
      [
        12,
        "Kris Humphrey",
        "Agency Legal Counsel",
        "Laredo",
        30,
        "$150,000",
        "asd"
      ],
      [
        13,
        "Frankie Long",
        "Industrial Analyst",
        "Austin",
        31,
        "$170,000",
        "asd"
      ],
      [
        14,
        "Brynn Robbins",
        "Business Analyst",
        "Norfolk",
        22,
        "$90,000",
        "asd"
      ],
      [
        15,
        "Justice Mann",
        "Business Consultant",
        "Chicago",
        24,
        "$133,000",
        "asd"
      ],
      [
        16,
        "Addison Navarro",
        "Business Management Analyst",
        "New York",
        50,
        "$295,000",
        "asd"
      ],
      [
        17,
        "Jesse Welch",
        "Agency Legal Counsel",
        "Seattle",
        28,
        "$200,000",
        "asd"
      ],
      [
        18,
        "Eli Mejia",
        "Commercial Specialist",
        "Long Beach",
        65,
        "$400,000",
        "asd"
      ],
      [
        19,
        "Gene Leblanc",
        "Industrial Analyst",
        "Hartford",
        34,
        "$110,000",
        "asd"
      ],
      [20, "Danny Leon", "Computer Scientist", "Newark", 60, "$220,000", "asd"],
      [
        21,
        "Lane Lee",
        "Corporate Counselor",
        "Cincinnati",
        52,
        "$180,000",
        "asd"
      ],
      [22, "Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000", "asd"],
      [
        23,
        "Danni Hudson",
        "Agency Legal Counsel",
        "Tampa",
        37,
        "$90,000",
        "asd"
      ],
      [
        24,
        "Terry Macdonald",
        "Commercial Specialist",
        "Miami",
        39,
        "$140,000",
        "asd"
      ],
      [25, "Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000", "asd"],
      [
        26,
        "Silver Carey",
        "Computer Scientist",
        "Memphis",
        47,
        "$250,000",
        "asd"
      ],
      [
        27,
        "Franky Miles",
        "Industrial Analyst",
        "Buffalo",
        49,
        "$190,000",
        "asd"
      ],
      [
        28,
        "Glen Nixon",
        "Corporate Counselor",
        "Arlington",
        44,
        "$80,000",
        "asd"
      ],
      [
        29,
        "Gabby Strickland",
        "Business Process Consultant",
        "Scottsdale",
        26,
        "$45,000",
        "asd"
      ],
      [
        30,
        "Mason Ray",
        "Computer Scientist",
        "San Francisco",
        39,
        "$142,000",
        "asd"
      ]
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scrollFullHeight",
      elevation: 0,
      customToolbar: () => {
        return <RecaudationOption idCommunity={9} month={"02"} year={2019} />;
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
