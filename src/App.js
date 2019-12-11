import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';
import PrincipalBtn from './commons/PrincipalBtn'
import SecondaryBtn from './commons/SecondaryBtn'
import ThirdBtn from './commons/ThirdBtn'
import SearchInputProps from './commons/SearchInputProps';
import DefaultCircleBtn from './commons/DefaultCircleBtn';
import PrimaryCircleBtn from './commons/PrimaryCircleBtn';
import OptionFilterLink from './commons/OptionFilterLink';
import DangerCircleBtn from './commons/DangerCircleBtn';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import CustomBar from './commons/CustomBar'
import DynamicCustomBar from './commons/DynamicCustomBar'
import DeleteBtn from './commons/DeleteBtn';
import CustomTabs from './commons/CustomTabs';
import NewPaymentModal from './modals/NewPaymentModal';

require('typeface-montserrat');

const tabInfo = [
  {
    id: '1',
    titleText: 'Diciembre',
    amountText:'$4.009.271',
  },
  {
    id: '2',
    titleText:'Enero',
    amountText:'$6.783.210'
  },
  {
    id: '3',
    titleText:'Febrero',
    amountText:'$5.892.000'
  }
]

const labels = ['NewPaymentModal','Custom Bar', 'OptionFilterLink', 'DynamicCustomBar','PrincipalBtn']
const content = [
  <NewPaymentModal folioNumber="3737" />,
  <CustomBar />,
  <OptionFilterLink label="Filter link" onClick={hello}/>,
  <><p>Tabla dinamicaaaaaa</p><DynamicCustomBar boxInfos={tabInfo}/></>,
  <PrincipalBtn label="Nuevo pago" handleClick={hello} />
]




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
    <Grid container spacing={12} >
        <Grid item xs={4} md={3}>
        <div>
          <PrincipalBtn
              label="Nuevo pago"
              handleClick={hello}
              />
          &nbsp;
          <PrincipalBtn
              label="Nuevo pago"
              disabled
              />
        </div>
        <br></br>
        <div>
          <SecondaryBtn
              label="Nuevo pago"
              />
          &nbsp;
          <SecondaryBtn
              label="Nuevo pago"
              disabled
              />
        </div>
        <br></br>
        <div>
          <ThirdBtn
              label="Nuevo pago"
              />
          &nbsp;
          <ThirdBtn
              label="Nuevo pago"
              disabled
              />
        </div>
        <br></br>
        <div>
          <DeleteBtn
              label="Borrar"
              />
          &nbsp;
          <DeleteBtn
              label="Borrar"
              disabled
              />
        </div>
        <br></br>
        <div>
          <SearchInputProps
              placeholder="Buscar"
              onClick={hello}
              />
          &nbsp;
          <SearchInputProps
              placeholder="Buscar"
              onClick={hello}
              disabled
              />
        </div>
        <br></br>
        <div>
          <DefaultCircleBtn
              iconBtn={<GetAppIcon />}
              onClick={hello}
              />
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
        <br></br>
        <div>
          <PrimaryCircleBtn
              iconBtn={<MoreVertIcon />}
              onClick={hello}
              />
          &nbsp;
          <PrimaryCircleBtn
              iconBtn={<MoreVertIcon />}
              onClick={hello}
              disabled
              />
        </div>
        <br></br>
        <div>
          <OptionFilterLink
              label="Filter link"
              onClick={hello}
              />
          &nbsp;
          <OptionFilterLink
              label="Filter link"
              onClick={hello}
              disabled
              />
        </div>
        <br></br>
        </Grid>
        <Grid item xs={8} md={9}>
          <CustomTabs tabLabels={labels} tabContent={content} /> {/* variant='fullWidth' */}

        </Grid>
      </Grid>
  </Container>
  );
}
