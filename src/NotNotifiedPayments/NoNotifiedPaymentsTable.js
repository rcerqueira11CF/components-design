import React from "react";
import MUIDataTable from "mui-datatables";
// import ReactDOM from "react-dom";
// import DangerCircleBtn from "../commons/DangerCircleBtn";
// import MultipleOptionsTableBtn from "../commons/MultipleOptionsTableBtn";
// import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NoNotifiedPaymentsOptions from "./NoNotifiedPaymentsTableOptions";
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
    const data = [
      ["1","50261","Torre8","Omar","1","$7576.03","08/20/19","12/01/20","$8,029","7065","tempor, est ac mattis semper, dui lectus rutrum urna, nec","May 2, 2020"],
["2","58777","Torre3","Ina","2","$7151.92","08/24/19","01/21/20","$9,360","3606","Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.","Dec 26, 2019"],
["3","05327","Torre2","Beatrice","3","$9201.77","02/21/19","08/20/20","$7,798","5741","ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed","Aug 28, 2020"],
["4","76925","Torre6","Farrah","4","$5820.64","05/14/19","02/21/20","$5,192","5624","a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo","Dec 29, 2018"],
["5","09574","Torre8","Ezekiel","5","$5452.70","07/31/19","09/28/20","$5,176","6845","Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean","Feb 17, 2019"],
["6","12253","Torre8","Hasad","6","$1019.40","05/15/19","12/18/20","$9,594","3857","parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla","Nov 12, 2020"],
["7","77531","Torre8","Emerald","7","$5579.55","07/14/19","02/15/20","$7,863","5152","lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate","Nov 9, 2020"],
["8","28197","Torre1","Jamal","8","$1205.82","12/08/19","12/27/19","$9,946","5689","justo sit amet nulla. Donec non justo. Proin non massa","Oct 13, 2020"],
["9","37691","Torre5","Michelle","9","$5120.12","12/24/18","12/18/19","$7,642","5336","et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat,","Jul 11, 2020"],
["10","02385","Torre2","Chanda","10","$2871.82","07/01/19","08/07/20","$5,128","2777","congue, elit sed consequat auctor, nunc nulla vulputate dui, nec","Apr 9, 2019"],
["11","15763","Torre4","Eugenia","11","$9741.38","01/29/19","11/25/20","$7,672","3761","Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,","Jun 25, 2020"],
["12","00008","Torre2","Kylee","12","$3888.82","02/11/19","05/14/20","$9,274","2995","molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare,","May 8, 2020"],
["13","70065","Torre6","Chase","13","$1578.13","02/11/19","02/09/20","$5,637","6716","diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus","Aug 10, 2020"],
["14","55554","Torre7","Jorden","14","$9110.81","12/08/19","02/08/20","$7,343","3841","sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam","Sep 9, 2020"],
["15","96895","Torre7","Hedley","15","$5349.75","06/02/19","07/28/20","$6,309","7536","eu arcu. Morbi sit amet massa. Quisque porttitor eros nec","Jun 22, 2020"],
["16","79188","Torre2","Jackson","16","$5877.95","11/09/19","02/16/20","$6,731","7385","Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh","Jul 11, 2020"],
["17","84140","Torre7","Kimberley","17","$5955.98","05/13/19","11/26/20","$9,521","3480","in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris","Oct 31, 2020"],
["18","35141","Torre0","Serena","18","$3373.04","09/07/19","06/24/20","$7,213","4231","non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris","Oct 19, 2020"],
["19","27006","Torre9","Jared","19","$5083.85","09/03/19","05/28/20","$5,820","5982","Sed congue, elit sed consequat auctor, nunc nulla vulputate dui,","Mar 30, 2019"],
["20","91070","Torre9","Anthony","20","$2529.34","03/01/19","12/07/20","$5,841","7979","ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam","Jan 12, 2019"],
["21","32689","Torre9","Kirestin","21","$3987.81","06/24/19","11/13/20","$8,655","2765","at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam","Jul 10, 2020"],
["22","19006","Torre7","Ori","22","$4079.29","08/30/19","07/07/20","$5,726","4328","dictum placerat, augue. Sed molestie. Sed id risus quis diam","Oct 22, 2019"],
["23","78828","Torre7","Clark","23","$9845.57","01/28/19","10/14/20","$8,597","2563","mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut,","Jul 16, 2020"],
["24","13106","Torre5","Danielle","24","$2342.10","04/17/19","03/11/20","$5,479","6383","quis arcu vel quam dignissim pharetra. Nam ac nulla. In","Aug 12, 2019"],
["25","41428","Torre5","Eliana","25","$7028.42","04/26/19","04/18/20","$9,330","4801","eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam","Jul 17, 2019"],
["26","08885","Torre4","Illana","26","$1021.08","08/01/19","04/06/20","$6,887","6754","a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam","Aug 15, 2019"],
["27","32568","Torre7","Tobias","27","$9787.78","09/08/19","11/17/20","$7,706","3610","sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit","Dec 7, 2020"],
["28","00328","Torre2","Eleanor","28","$2279.60","07/16/19","01/03/20","$8,329","4658","ut erat. Sed nunc est, mollis non, cursus non, egestas","Aug 27, 2020"],
["29","66685","Torre7","Halee","29","$9632.60","03/07/19","04/14/20","$7,969","3843","dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque","Feb 21, 2020"],
["30","52316","Torre3","Shelby","30","$9667.72","05/06/19","09/22/20","$7,613","2463","amet, risus. Donec nibh enim, gravida sit amet, dapibus id,","Sep 30, 2019"],
["31","27270","Torre9","Abra","31","$8249.98","01/31/19","12/15/20","$9,475","1638","in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus","Aug 27, 2019"],
["32","65391","Torre2","Clarke","32","$5461.52","09/04/19","09/17/20","$9,979","6173","aliquet magna a neque. Nullam ut nisi a odio semper","Sep 19, 2019"],
["33","88699","Torre5","Drew","33","$5996.58","03/05/19","03/30/20","$9,687","7287","malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam","Oct 31, 2019"],
["34","14012","Torre0","Macey","34","$9235.87","08/05/19","07/17/20","$7,639","5909","risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt,","Apr 6, 2019"],
["35","20100","Torre2","Aquila","35","$4186.43","03/11/19","05/23/20","$5,782","4287","Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.","Jun 30, 2019"],
["36","24682","Torre6","Dolan","36","$3941.46","07/02/19","04/21/20","$9,214","2202","pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac,","Jul 10, 2019"],
["37","87847","Torre1","Kuame","37","$6982.33","03/03/19","08/05/20","$5,917","2010","in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris","Jun 5, 2020"],
["38","55377","Torre3","Reed","38","$6460.06","11/28/19","08/07/20","$5,604","6469","mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In","Feb 7, 2020"],
["39","26615","Torre7","Declan","39","$2007.55","11/19/19","12/11/20","$6,399","2593","neque et nunc. Quisque ornare tortor at risus. Nunc ac","Mar 29, 2019"],
["40","50996","Torre2","Linda","40","$4289.76","07/07/19","03/06/20","$6,841","1368","et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis","Aug 6, 2019"],
["41","11927","Torre5","Chester","41","$2083.22","01/14/19","06/24/20","$5,540","6780","Donec porttitor tellus non magna. Nam ligula elit, pretium et,","Aug 30, 2019"],
["42","57330","Torre3","Xaviera","42","$3360.56","03/11/19","06/17/20","$7,944","6415","tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac","Feb 16, 2020"],
["43","95469","Torre7","Jade","43","$4443.29","04/03/19","07/28/20","$6,080","1218","lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate","Apr 15, 2020"],
["44","55791","Torre9","Shea","44","$2161.58","02/23/19","02/03/20","$7,043","2776","Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc","Nov 12, 2020"],
["45","62943","Torre0","Davis","45","$9148.58","04/29/19","03/03/20","$5,144","4132","et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat","Jan 27, 2019"],
["46","13660","Torre4","Elijah","46","$7735.77","07/06/19","12/21/19","$7,873","4025","auctor odio a purus. Duis elementum, dui quis accumsan convallis,","Jun 4, 2019"],
["47","08283","Torre8","Christian","47","$8803.39","09/29/19","01/17/20","$6,219","1232","Ut semper pretium neque. Morbi quis urna. Nunc quis arcu","Oct 10, 2019"],
["48","52313","Torre7","Trevor","48","$1046.50","02/19/19","04/06/20","$7,576","1082","netus et malesuada fames ac turpis egestas. Fusce aliquet magna","Jun 12, 2019"],
["49","27591","Torre4","Hamish","49","$6791.16","11/30/19","07/16/20","$6,095","4101","posuere, enim nisl elementum purus, accumsan interdum libero dui nec","Jul 9, 2019"],
["50","08030","Torre1","Freya","50","$4687.52","10/10/19","03/08/20","$9,791","3590","nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo","Dec 14, 2019"],
["51","74560","Torre8","Alfreda","51","$8328.31","06/09/19","09/21/20","$8,879","2783","justo. Proin non massa non ante bibendum ullamcorper. Duis cursus,","Oct 3, 2020"],
["52","63772","Torre2","Baxter","52","$5990.98","06/09/19","11/04/20","$8,785","3699","Sed eget lacus. Mauris non dui nec urna suscipit nonummy.","Aug 21, 2020"],
["53","72372","Torre1","Maya","53","$3376.00","08/04/19","05/26/20","$5,033","3695","erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.","May 24, 2020"],
["54","96436","Torre5","September","54","$1231.19","02/27/19","11/26/20","$5,220","7804","nunc est, mollis non, cursus non, egestas a, dui. Cras","Jan 4, 2020"],
["55","45933","Torre7","Ava","55","$5402.76","05/28/19","03/08/20","$6,521","6998","et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum","May 9, 2020"],
["56","51347","Torre4","Curran","56","$9325.68","05/24/19","01/23/20","$8,227","1972","et malesuada fames ac turpis egestas. Fusce aliquet magna a","Nov 17, 2020"],
["57","50395","Torre4","Tyler","57","$5528.48","07/01/19","07/19/20","$9,940","3639","dictum augue malesuada malesuada. Integer id magna et ipsum cursus","Jul 13, 2020"],
["58","98958","Torre8","Kato","58","$7268.36","03/24/19","10/24/20","$9,573","7527","dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus","Mar 17, 2020"],
["59","76865","Torre8","Michael","59","$3833.71","09/17/19","05/14/20","$9,729","6629","luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc","Oct 21, 2020"],
["60","73219","Torre2","Melyssa","60","$3613.88","03/04/19","08/17/20","$6,856","4310","natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Aug 9, 2019"],
["61","26775","Torre4","Hope","61","$7476.29","10/06/19","09/25/20","$6,358","5492","fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,","Dec 8, 2019"],
["62","16819","Torre1","Jessica","62","$1361.93","09/20/19","06/23/20","$6,912","1981","gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa","Oct 9, 2019"],
["63","32498","Torre7","Aristotle","63","$8970.67","08/02/19","03/14/20","$9,087","5898","velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque","Jan 3, 2020"],
["64","99758","Torre9","Dawn","64","$1199.84","01/19/19","11/28/20","$8,924","1099","imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at","Feb 17, 2019"],
["65","22573","Torre0","Olga","65","$6331.84","12/28/18","10/22/20","$5,709","5699","luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi","Aug 27, 2019"],
["66","08848","Torre1","Stephen","66","$5780.41","12/05/19","04/14/20","$8,011","7361","ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget","Jun 17, 2019"],
["67","85697","Torre3","Libby","67","$8360.54","06/21/19","10/17/20","$5,945","5472","eget varius ultrices, mauris ipsum porta elit, a feugiat tellus","Aug 20, 2019"],
["68","11065","Torre4","Jermaine","68","$6658.04","03/20/19","11/04/20","$6,442","6950","nulla magna, malesuada vel, convallis in, cursus et, eros. Proin","Nov 16, 2020"],
["69","67161","Torre0","Ignatius","69","$9793.77","02/14/19","07/09/20","$6,682","4034","eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam","Nov 22, 2019"],
["70","74163","Torre9","Hedwig","70","$8759.94","10/14/19","05/11/20","$8,289","4194","nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere","Jul 26, 2020"],
["71","08954","Torre3","Clinton","71","$8531.80","03/18/19","10/11/20","$8,983","6495","quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque","Feb 16, 2019"],
["72","46148","Torre7","Natalie","72","$1717.53","08/17/19","10/01/20","$5,477","6133","sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed","Jan 31, 2019"],
["73","95052","Torre7","Clinton","73","$3606.64","12/20/18","12/20/19","$5,086","5567","sit amet ultricies sem magna nec quam. Curabitur vel lectus.","Sep 27, 2019"],
["74","55254","Torre9","Cheryl","74","$7320.24","06/28/19","06/22/20","$6,314","6487","aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in","Jul 16, 2020"],
["75","15266","Torre5","Herman","75","$2811.29","02/22/19","12/24/19","$5,440","7435","leo elementum sem, vitae aliquam eros turpis non enim. Mauris","Oct 17, 2019"],
["76","04646","Torre0","Keith","76","$8446.92","10/26/19","08/25/20","$7,572","3101","metus. In nec orci. Donec nibh. Quisque nonummy ipsum non","Dec 19, 2018"],
["77","84024","Torre3","Rafael","77","$4248.71","11/29/19","02/20/20","$8,900","6258","elit sed consequat auctor, nunc nulla vulputate dui, nec tempus","Mar 15, 2019"],
["78","99424","Torre8","Baker","78","$5875.32","08/17/19","01/25/20","$6,618","7666","arcu ac orci. Ut semper pretium neque. Morbi quis urna.","Apr 9, 2020"],
["79","92357","Torre5","Robert","79","$6201.23","12/01/19","05/01/20","$5,456","4863","Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.","Feb 12, 2019"],
["80","67396","Torre8","Tate","80","$5369.83","01/11/19","04/22/20","$9,059","2067","Sed congue, elit sed consequat auctor, nunc nulla vulputate dui,","Oct 19, 2019"],
["81","95054","Torre6","Wayne","81","$2708.04","05/31/19","10/07/20","$9,769","3725","mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed","Oct 2, 2019"],
["82","44199","Torre4","Alyssa","82","$5088.22","09/08/19","10/15/20","$8,657","2199","pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac,","Feb 6, 2020"],
["83","76744","Torre2","Chester","83","$7148.48","05/21/19","07/28/20","$7,792","3562","per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.","Feb 26, 2019"],
["84","78153","Torre7","Jonas","84","$1812.84","03/18/19","08/09/20","$7,094","5202","suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis","Sep 9, 2020"],
["85","89882","Torre8","Megan","85","$7440.96","08/13/19","12/11/20","$6,984","7270","in consequat enim diam vel arcu. Curabitur ut odio vel","Feb 27, 2020"],
["86","92416","Torre6","Morgan","86","$1911.39","11/30/19","08/17/20","$7,594","3222","pretium aliquet, metus urna convallis erat, eget tincidunt dui augue","Jun 24, 2020"],
["87","27523","Torre9","Quail","87","$9041.38","07/30/19","05/29/20","$6,835","1445","ornare, lectus ante dictum mi, ac mattis velit justo nec","Jul 2, 2020"],
["88","16867","Torre3","Eric","88","$5957.56","05/10/19","06/27/20","$8,517","2154","vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae","Sep 9, 2020"],
["89","02583","Torre3","Jesse","89","$5173.17","09/05/19","01/15/20","$8,625","1747","Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem,","Jan 27, 2019"],
["90","28592","Torre6","Rae","90","$5148.97","01/21/19","10/06/20","$6,171","6692","in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan","Sep 16, 2019"],
["91","15142","Torre0","Kalia","91","$9971.85","06/02/19","09/24/20","$7,350","6303","Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum","Apr 27, 2019"],
["92","71370","Torre6","Allen","92","$5129.84","06/22/19","04/09/20","$8,124","4808","Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue.","Oct 11, 2020"],
["93","94628","Torre4","Kieran","93","$6745.37","09/10/19","02/12/20","$5,168","4473","risus varius orci, in consequat enim diam vel arcu. Curabitur","Mar 22, 2020"],
["94","55241","Torre8","Kelly","94","$4765.34","04/09/19","06/25/20","$5,988","3687","tellus faucibus leo, in lobortis tellus justo sit amet nulla.","Jul 18, 2020"],
["95","58409","Torre9","Orson","95","$4589.51","01/29/19","03/23/20","$6,207","6491","id nunc interdum feugiat. Sed nec metus facilisis lorem tristique","Feb 22, 2020"],
["96","58603","Torre9","Libby","96","$2870.43","04/21/19","12/29/19","$7,030","4037","Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien","Oct 26, 2020"],
["97","40000","Torre1","Kelsey","97","$2722.20","04/29/19","10/05/20","$9,455","3321","arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus.","Feb 4, 2019"],
["98","10822","Torre5","Nichole","98","$8534.56","04/23/19","12/22/19","$9,304","5932","pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod","Apr 13, 2019"],
["99","34825","Torre1","Cameran","99","$9366.45","10/27/19","02/12/20","$6,245","3003","vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit","Jan 19, 2020"],
["100","51238","Torre3","Alice","100","$4545.82","11/12/19","09/10/20","$9,487","6534","vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae","Jul 29, 2020"]
    ];

    const columns = [
      { name: "id", options: { display: "excluded" } },
      "Unidad",
      "Torre",
      "Copropietario",
      "Folio",
      "Monto",
      "Fecha de pago",
      "Fecha de ingreso",
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
                <NoNotifiedPaymentsOptions
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
