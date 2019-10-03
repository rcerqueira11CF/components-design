import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box mt={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function tabGenerator(label, index, classes){
  var tabClass = index === 0 ? clsx(classes.tabStyle, classes.firstTab) : clsx(classes.tabStyle, classes.centerTab)
  return (<Tab label={label} className={tabClass} {...a11yProps(index)} />);
}

function tabContentGenerator(tabContent, value, index){
  return (
    <TabPanel value={value} index={index}>
      {tabContent}
     </TabPanel>
  )
}

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "transparent"
  },
  upperIndicator: {
    top: 0,
    backgroundColor: "#00c85f",
    height: 2
    },
  tabStyle: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 0.5,
    letterSpacing: "normal",
    textTransform: "none",
    "&.Mui-selected": {
      fontWeight: 'bold',
    }
  },
  tabBar: {
    backgroundColor: "transparent",
    borderBottom: '0.01em solid #eaeaea',
  },

  firstTab: {
    '&.Mui-selected': {
      borderRight: "0.01em solid #eaeaea",
      borderBottom: "0.1em solid #ffffff",
    },

  },
  centerTab: {
    "&.Mui-selected": {
      borderRight: "0.01em solid #eaeaea",
      borderLeft: "0.01em solid #eaeaea",
      borderBottom: "0.1em solid #ffffff",
    }
  },
};



function SimpleTabs(props) {
  const { classes, tabLabels, tabContent} = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        classes={{ indicator: classes.upperIndicator }}
        className={classes.tabBar}
      >

      {tabLabels.map((label, index) =>{
        return (tabGenerator(label, index, classes))
        })
       }
      </Tabs>

      {tabContent.map((content, index) =>{
        return (tabContentGenerator(content, value, index))
        })
       }
    </div>
  );
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
