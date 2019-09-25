import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';
import PrincipalBtn from './commons/PrincipalBtn'
import SecondaryBtn from './commons/SecondaryBtn'
import ThirdBtn from './commons/ThirdBtn'
import SearchInputProps from './commons/SearchInputProps';
require('typeface-montserrat');



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
  console.log("aaa");
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={8}>
        <Typography variant="h4" component="h1" gutterBottom>
          Comunidad Feliz Nuevos Diseños
        </Typography>
        {/* <ProTip /> */}
      </Box>
      <Box my={2}>
        <div>
          <PrincipalBtn
              label="Nuevo pago"
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

      </Box>
    </Container>
  );
}
