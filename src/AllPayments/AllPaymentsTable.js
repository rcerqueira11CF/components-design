import React from "react";
import MUIDataTable from "mui-datatables";
// import ReactDOM from "react-dom";
// import DangerCircleBtn from "../commons/DangerCircleBtn";
// import MultipleOptionsTableBtn from "../commons/MultipleOptionsTableBtn";
// import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NewPaymentModal from "../NewPaymentModal/PaymentModal";
import AllPaymentsTableOptions from "./AllPaymentsTableOptions";
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
      ["1","27877","Torre0","Josiah","1","$6003.04","02/07/19","11/20/20","$8,399","5760","dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu","Sep 26, 2020"],
      ["2","39627","Torre7","Lacy","2","$2427.51","11/07/19","09/20/20","$8,411","2987","mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae,","Dec 26, 2019"],
      ["3","30167","Torre2","Elijah","3","$2396.61","05/04/19","08/29/20","$7,594","7969","lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse","Apr 28, 2019"],
      ["4","44487","Torre3","Leigh","4","$8040.10","01/18/19","10/05/20","$8,966","1074","eu erat semper rutrum. Fusce dolor quam, elementum at, egestas","Jul 17, 2019"],
      ["5","92091","Torre4","Buffy","5","$3410.76","08/19/19","03/30/20","$9,621","3629","lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies","Nov 11, 2019"],
      ["6","16711","Torre0","Skyler","6","$3734.93","07/25/19","01/12/20","$9,408","1253","Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet","Feb 25, 2020"],
      ["7","27448","Torre4","Madaline","7","$7728.49","04/17/19","02/06/20","$8,077","1144","ornare lectus justo eu arcu. Morbi sit amet massa. Quisque","Feb 8, 2020"],
      ["8","61861","Torre3","Sandra","8","$4628.99","12/12/19","05/30/20","$8,635","7019","cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula","Jul 1, 2019"],
      ["9","76350","Torre0","Laith","9","$1152.74","08/19/19","10/31/20","$7,772","3098","elit erat vitae risus. Duis a mi fringilla mi lacinia","Jul 3, 2019"],
      ["10","93950","Torre9","Andrew","10","$4281.37","12/25/18","11/18/20","$9,558","2081","arcu. Vestibulum ante ipsum primis in faucibus orci luctus et","Feb 26, 2020"],
      ["11","37619","Torre2","Natalie","11","$6279.98","09/13/19","07/03/20","$5,398","5862","massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices","Jun 25, 2019"],
      ["12","87174","Torre7","Lyle","12","$6677.57","07/10/19","04/01/20","$7,125","6034","dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum","Aug 30, 2019"],
      ["13","96059","Torre8","Quon","13","$8221.76","12/03/19","03/05/20","$7,188","3019","habitant morbi tristique senectus et netus et malesuada fames ac","Jun 24, 2019"],
      ["14","64587","Torre0","Eleanor","14","$1143.04","07/28/19","07/17/20","$6,713","4608","sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo","Oct 17, 2019"],
      ["15","81285","Torre0","Griffin","15","$8763.11","03/31/19","05/16/20","$9,655","4549","dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor","Oct 16, 2019"],
      ["16","88119","Torre4","Garrett","16","$4164.37","08/22/19","09/26/20","$8,247","4211","sem mollis dui, in sodales elit erat vitae risus. Duis","Mar 2, 2019"],
      ["17","68609","Torre0","Keiko","17","$4916.58","08/06/19","04/12/20","$7,984","6582","massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis","Jan 11, 2020"],
      ["18","09975","Torre2","Ramona","18","$9065.17","07/07/19","04/02/20","$9,255","6981","tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris.","Apr 1, 2020"],
      ["19","41423","Torre5","Dylan","19","$4676.35","03/05/19","04/22/20","$5,364","2375","enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida.","Nov 13, 2020"],
      ["20","87874","Torre2","Dustin","20","$6632.73","11/27/19","05/28/20","$9,738","6853","augue id ante dictum cursus. Nunc mauris elit, dictum eu,","Dec 10, 2020"],
      ["21","58908","Torre8","Arsenio","21","$8239.74","02/28/19","02/09/20","$5,115","4920","est tempor bibendum. Donec felis orci, adipiscing non, luctus sit","Apr 14, 2019"],
      ["22","50800","Torre5","Luke","22","$7185.29","12/19/18","03/27/20","$6,887","1412","pretium aliquet, metus urna convallis erat, eget tincidunt dui augue","Mar 15, 2019"],
      ["23","35807","Torre2","Perry","23","$9111.04","09/07/19","11/22/20","$5,408","7269","Curabitur egestas nunc sed libero. Proin sed turpis nec mauris","Jun 15, 2020"],
      ["24","92967","Torre6","Abel","24","$4651.02","09/21/19","09/11/20","$5,262","2137","ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros","Feb 26, 2020"],
      ["25","41328","Torre5","Donovan","25","$3374.83","03/06/19","10/12/20","$7,535","5360","elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu","Nov 13, 2020"],
      ["26","03011","Torre1","Adrienne","26","$5063.10","09/20/19","02/08/20","$6,221","7942","ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet","Oct 16, 2020"],
      ["27","81758","Torre1","Boris","27","$2584.29","09/29/19","08/23/20","$8,680","7861","id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend","Feb 25, 2019"],
      ["28","93219","Torre7","Ethan","28","$1138.12","03/24/19","03/22/20","$8,760","7248","at augue id ante dictum cursus. Nunc mauris elit, dictum","Oct 28, 2020"],
      ["29","24664","Torre5","Harding","29","$9089.87","09/06/19","02/27/20","$5,140","7388","mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam","Aug 3, 2020"],
      ["30","58196","Torre8","Ifeoma","30","$2688.48","10/21/19","01/10/20","$5,507","6919","amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor","Oct 22, 2019"],
      ["31","61657","Torre8","Ann","31","$5369.29","06/27/19","03/01/20","$6,746","6914","dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing","Jun 26, 2019"],
      ["32","97376","Torre4","Harding","32","$4529.52","05/14/19","04/16/20","$5,516","5004","Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue,","Nov 5, 2020"],
      ["33","23908","Torre4","Jena","33","$9719.00","12/05/19","06/23/20","$9,863","7857","magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna.","Oct 20, 2020"],
      ["34","90643","Torre0","Jescie","34","$5329.57","05/13/19","09/16/20","$9,099","6615","sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis","Feb 22, 2019"],
      ["35","28740","Torre1","Jena","35","$5006.56","01/24/19","02/22/20","$8,311","6084","et netus et malesuada fames ac turpis egestas. Aliquam fringilla","Oct 11, 2020"],
      ["36","87229","Torre1","Ivory","36","$7227.10","05/16/19","01/04/20","$6,882","5151","non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper","Oct 6, 2019"],
      ["37","95404","Torre2","Walker","37","$3815.09","11/05/19","09/01/20","$6,750","3856","dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque","Oct 30, 2019"],
      ["38","22264","Torre1","Ignacia","38","$1513.77","09/30/19","11/28/20","$7,947","2212","sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula","Dec 10, 2019"],
      ["39","43942","Torre7","Cailin","39","$8587.27","12/30/18","10/08/20","$6,157","2315","elit fermentum risus, at fringilla purus mauris a nunc. In","Aug 15, 2019"],
      ["40","82752","Torre9","Bruce","40","$9265.48","08/21/19","08/06/20","$9,077","5289","nisi dictum augue malesuada malesuada. Integer id magna et ipsum","Aug 26, 2019"],
      ["41","10558","Torre1","Eric","41","$4157.01","04/18/19","01/08/20","$5,627","6972","nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus.","Dec 23, 2019"],
      ["42","58463","Torre5","Tarik","42","$1221.77","08/29/19","09/28/20","$7,063","7805","eros nec tellus. Nunc lectus pede, ultrices a, auctor non,","Jun 18, 2020"],
      ["43","83252","Torre0","Odessa","43","$2397.87","04/18/19","05/15/20","$8,998","7462","gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet","Jul 25, 2020"],
      ["44","78441","Torre8","Alfreda","44","$1688.56","08/11/19","05/09/20","$6,016","6957","enim, sit amet ornare lectus justo eu arcu. Morbi sit","Oct 26, 2020"],
      ["45","01872","Torre2","Tanek","45","$9819.97","06/01/19","09/24/20","$5,780","7267","lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate","Mar 27, 2019"],
      ["46","13169","Torre9","George","46","$7246.27","05/27/19","07/24/20","$5,758","1578","id risus quis diam luctus lobortis. Class aptent taciti sociosqu","Aug 18, 2019"],
      ["47","84029","Torre2","Brennan","47","$4096.27","05/27/19","11/20/20","$6,321","7536","id risus quis diam luctus lobortis. Class aptent taciti sociosqu","Mar 2, 2020"],
      ["48","25671","Torre8","Vivien","48","$7181.46","12/16/19","05/02/20","$8,533","2558","ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,","Mar 17, 2020"],
      ["49","82173","Torre3","Orli","49","$8419.08","01/06/19","06/09/20","$7,808","5099","dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer","Mar 5, 2020"],
      ["50","23115","Torre5","Wendy","50","$4218.25","11/11/19","08/07/20","$9,774","5446","luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc","Mar 17, 2019"],
      ["51","54183","Torre0","Reese","51","$7698.87","11/02/19","09/05/20","$7,629","3558","mollis dui, in sodales elit erat vitae risus. Duis a","Jan 5, 2019"],
      ["52","12724","Torre4","Kieran","52","$6132.62","02/19/19","08/20/20","$9,277","4465","nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut","Jan 17, 2019"],
      ["53","12667","Torre3","Giacomo","53","$9029.37","07/02/19","06/16/20","$5,792","5837","ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et","Oct 4, 2020"],
      ["54","72304","Torre5","Eaton","54","$1453.54","11/21/19","07/23/20","$7,903","7671","accumsan convallis, ante lectus convallis est, vitae sodales nisi magna","Nov 12, 2019"],
      ["55","94042","Torre9","Calista","55","$8808.52","08/19/19","03/11/20","$5,288","6275","Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec","Jan 15, 2020"],
      ["56","83329","Torre8","Quinlan","56","$9483.98","04/27/19","06/09/20","$6,792","5610","Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum.","May 29, 2019"],
      ["57","13902","Torre8","Hedda","57","$7768.35","07/16/19","09/13/20","$7,506","3292","sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis","Oct 11, 2020"],
      ["58","40461","Torre2","Nash","58","$7999.18","09/01/19","03/18/20","$8,711","4637","mauris id sapien. Cras dolor dolor, tempus non, lacinia at,","Mar 30, 2019"],
      ["59","29909","Torre3","Winifred","59","$6663.81","10/15/19","07/12/20","$8,265","7412","nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus.","Jun 8, 2020"],
      ["60","20142","Torre7","Giacomo","60","$8949.10","09/06/19","11/16/20","$7,867","7575","vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie","Nov 20, 2019"],
      ["61","98368","Torre8","Leonard","61","$8494.81","10/03/19","05/13/20","$6,927","4788","enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula","Dec 4, 2019"],
      ["62","01874","Torre4","Sylvia","62","$6111.05","04/11/19","08/31/20","$8,673","4300","ut eros non enim commodo hendrerit. Donec porttitor tellus non","Sep 4, 2019"],
      ["63","43791","Torre4","Rose","63","$4066.22","08/26/19","01/24/20","$5,499","6362","ornare lectus justo eu arcu. Morbi sit amet massa. Quisque","Nov 24, 2020"],
      ["64","28036","Torre0","Raya","64","$6559.75","03/02/19","05/02/20","$8,148","4415","vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh","Jul 25, 2019"],
      ["65","44690","Torre3","Acton","65","$4306.34","04/08/19","06/25/20","$7,467","2864","malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis.","Dec 18, 2018"],
      ["66","92612","Torre4","Ciara","66","$7692.09","05/10/19","11/18/20","$9,054","6797","nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam","May 12, 2020"],
      ["67","66632","Torre7","Imogene","67","$1310.43","07/09/19","11/16/20","$9,930","1904","ultrices sit amet, risus. Donec nibh enim, gravida sit amet,","Jan 1, 2019"],
      ["68","49277","Torre6","Len","68","$6349.56","08/19/19","08/17/20","$5,396","5435","Sed molestie. Sed id risus quis diam luctus lobortis. Class","Feb 1, 2019"],
      ["69","89840","Torre7","Karina","69","$6138.55","01/13/19","12/03/20","$9,723","5933","Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna.","Feb 12, 2020"],
      ["70","51536","Torre4","Sophia","70","$4095.57","04/27/19","07/11/20","$9,587","5925","facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa.","May 26, 2019"],
      ["71","97799","Torre8","Serina","71","$3961.58","12/21/18","06/15/20","$8,959","4139","pede. Praesent eu dui. Cum sociis natoque penatibus et magnis","May 19, 2020"],
      ["72","56887","Torre8","Garrett","72","$7784.80","11/20/19","09/14/20","$8,628","2318","non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet,","Dec 11, 2019"],
      ["73","33000","Torre1","Ivan","73","$4335.76","06/26/19","06/15/20","$5,537","2712","non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed","Jan 21, 2020"],
      ["74","91804","Torre8","Tatum","74","$6404.71","01/06/19","12/06/20","$6,538","3446","arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.","Oct 1, 2019"],
      ["75","48988","Torre5","Kyla","75","$5952.27","05/28/19","11/27/20","$5,952","2949","augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed,","Feb 27, 2020"],
      ["76","87241","Torre1","Malcolm","76","$4438.19","09/07/19","10/10/20","$9,489","3828","ante dictum mi, ac mattis velit justo nec ante. Maecenas","Mar 5, 2020"],
      ["77","09822","Torre5","Lydia","77","$8062.44","06/29/19","04/20/20","$7,917","1225","volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean","May 8, 2020"],
      ["78","80773","Torre5","Joseph","78","$9166.05","10/22/19","05/27/20","$6,436","5430","tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer","Mar 31, 2020"],
      ["79","82126","Torre8","Taylor","79","$2080.49","12/08/19","01/15/20","$8,224","6974","amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque,","Mar 3, 2020"],
      ["80","37551","Torre3","Tarik","80","$8079.04","01/21/19","06/15/20","$6,846","3227","ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend","Aug 29, 2020"],
      ["81","37799","Torre6","Lesley","81","$9921.46","09/14/19","03/19/20","$9,075","4562","odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam","Oct 26, 2020"],
      ["82","80779","Torre0","Ralph","82","$5442.92","12/23/18","10/27/20","$8,625","5176","Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris.","Jan 23, 2019"],
      ["83","59083","Torre2","Pascale","83","$2877.41","07/23/19","04/23/20","$5,627","3557","Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Jan 15, 2019"],
      ["84","50690","Torre6","Ivan","84","$5113.77","08/31/19","11/25/20","$8,847","2379","turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla","Dec 6, 2020"],
      ["85","83854","Torre4","Mechelle","85","$3154.21","08/01/19","04/27/20","$6,433","2055","Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean","May 24, 2020"],
      ["86","74551","Torre6","Aphrodite","86","$5027.63","10/28/19","03/31/20","$7,650","4747","ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum","Jul 24, 2019"],
      ["87","39304","Torre6","Naida","87","$2072.29","04/10/19","04/07/20","$7,485","7351","Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam","Sep 10, 2019"],
      ["88","70192","Torre2","Porter","88","$2734.06","04/07/19","07/01/20","$8,565","7463","ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci","Apr 11, 2019"],
      ["89","83613","Torre6","Teegan","89","$6559.77","11/19/19","05/26/20","$5,065","3725","mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed","Nov 9, 2020"],
      ["90","38239","Torre8","Daquan","90","$4155.02","01/27/19","03/22/20","$6,282","6776","ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor.","Sep 17, 2020"],
      ["91","44022","Torre6","Jennifer","91","$3703.90","08/16/19","04/14/20","$5,763","5559","montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc","Apr 9, 2019"],
      ["92","39324","Torre4","Phoebe","92","$5589.62","07/20/19","01/13/20","$9,476","4475","Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo","Jun 24, 2019"],
      ["93","77420","Torre4","Kaseem","93","$2605.35","04/17/19","04/24/20","$9,678","7291","et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis","Nov 13, 2020"],
      ["94","37159","Torre8","Jescie","94","$6653.12","04/09/19","07/15/20","$8,059","5989","vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus","Nov 29, 2020"],
      ["95","16975","Torre8","Jelani","95","$7181.18","10/23/19","12/10/20","$8,529","4939","luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec","Dec 17, 2020"],
      ["96","62765","Torre8","Alfonso","96","$8007.60","09/10/19","03/28/20","$8,834","3809","nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra.","Oct 24, 2020"],
      ["97","46847","Torre3","Roth","97","$1997.92","12/14/19","10/03/20","$8,282","2249","orci lacus vestibulum lorem, sit amet ultricies sem magna nec","Apr 28, 2020"],
      ["98","55807","Torre6","Kirsten","98","$2602.92","07/19/19","07/07/20","$6,762","4275","neque. Sed eget lacus. Mauris non dui nec urna suscipit","Jul 22, 2020"],
      ["99","00469","Torre3","Ginger","99","$7516.52","08/01/19","07/01/20","$5,243","7645","felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem,","Aug 13, 2020"],
      ["100","21576","Torre2","Chester","100","$6905.84","01/08/19","11/20/20","$9,960","3686","aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt,","Feb 19, 2020"]
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
                <AllPaymentsTableOptions
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
