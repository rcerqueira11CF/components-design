import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';
import PrincipalBtn from "../commons/PrincipalBtn";
import SecondaryBtn from "../commons/SecondaryBtn";
import ThirdBtn from "../commons/ThirdBtn";
import SearchInputProps from "../commons/SearchInputProps";
import DefaultCircleBtn from "../commons/DefaultCircleBtn";
import PrimaryCircleBtn from "../commons/PrimaryCircleBtn";
import OptionFilterLink from "../commons/OptionFilterLink";
import DangerCircleBtn from "../commons/DangerCircleBtn";
import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import CustomBar from "../commons/CustomBar";
import DynamicCustomBar from "../commons/DynamicCustomBar";
import DeleteBtn from "../commons/DeleteBtn";
import CustomTabs from "../commons/CustomTabs";
import NewPaymentModal from "../NewPaymentModal/PaymentModal";


require("typeface-montserrat");

const tabInfo = [
  {
    id: "1",
    titleText: "Diciembre",
    amountText: "$4.009.271"
  },
  {
    id: "2",
    titleText: "Enero",
    amountText: "$6.783.210"
  },
  {
    id: "3",
    titleText: "Febrero",
    amountText: "$5.892.000"
  }
];

const labels = [
  "CustomBar",
  "DynamicCustomBar",
  "NewPaymentModal"
];
const content = [
  <CustomBar />,
  <>
    <p>Tab dinamica</p>
    <DynamicCustomBar boxInfos={tabInfo} />
  </>,
  <>
    <NewPaymentModal idCommunity={9} />
  </>,

];

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

function hello() {
  alert("aaa");
}

export default function App() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Comunidad Feliz Nuevos Diseños
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={4} md={3}>
          <div>
            <span>PrincipalBtn</span>
            <PrincipalBtn label="Nuevo pago" handleClick={hello} />
            &nbsp;
            <PrincipalBtn label="Nuevo pago" disabled />
          </div>
          <br />
          <div>
            <span>SecondaryBtn</span>
            <SecondaryBtn label="Nuevo pago" />
            &nbsp;
            <SecondaryBtn label="Nuevo pago" disabled />
          </div>
          <br />
          <div>
            <span>ThirdBtn</span>
            <ThirdBtn label="Nuevo pago" />
            &nbsp;
            <ThirdBtn label="Nuevo pago" disabled />
          </div>
          <br />
          <div>
            <span>DeleteBtn</span>
            <DeleteBtn label="Borrar" />
            &nbsp;
            <DeleteBtn label="Borrar" disabled />
          </div>
          <br />
          <div>
            <span>SearchInputProps</span>
            <SearchInputProps placeholder="Buscar" onClick={hello} />
            &nbsp;
            <SearchInputProps placeholder="Buscar" onClick={hello} disabled />
          </div>
          <br />
          <div>
            <span>DefaultCircleBtn</span>
            <DefaultCircleBtn iconBtn={<GetAppIcon />} onClick={hello} />
            &nbsp;
            <DefaultCircleBtn
              iconBtn={<GetAppIcon />}
              onClick={hello}
              disabled
            />
            &nbsp;
            <DangerCircleBtn
              iconBtn={<DeleteForeverOutlinedIcon />}
              onClick={hello}
            />
            &nbsp;
            <DangerCircleBtn
              iconBtn={<DeleteForeverOutlinedIcon />}
              onClick={hello}
              disabled
            />
          </div>
          <br />
          <div>
            <span>PrimaryCircleBtn</span>
            <PrimaryCircleBtn iconBtn={<MoreVertIcon />} onClick={hello} />
            &nbsp;
            <PrimaryCircleBtn
              iconBtn={<MoreVertIcon />}
              onClick={hello}
              disabled
            />
          </div>
          <br />
          <div>
            <span>OptionFilterLink</span>
            <OptionFilterLink label="Filter link" onClick={hello} />
            &nbsp;
            <OptionFilterLink label="Filter link" onClick={hello} disabled />
          </div>
          <br />
        </Grid>
        <Grid item xs={8} md={9}>
          <CustomTabs tabLabels={labels} tabContent={content} />{" "}
          {/* variant='fullWidth' */}
        </Grid>
      </Grid>
    </Container>
  );
}
