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

function tabGenerator(label, index, tabsSize, classes){
  const tabClass = clsx(classes.firstTab)

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
    backgroundColor: "inherit"
  },
  upperIndicator: {
    top: 0,
    backgroundColor: "#00c85f",
    size: 10
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
    "&:hover, &:active, &:focus": {
      fontWeight: "bold"
    }
  },
  tabBar: {
    backgroundColor: "transparent"

    //borderBottom: '0.1em solid #6d6d6d',
    //'&:focus-within': {
    //borderBottom: 'none'
    //}
  },
  centerTab: {
    borderBottom: "0.1em solid #6d6d6d",
    transitionProperty: "borderBottom",
    transitionDuration: "8s",
    "&:focus": {
      borderRight: "0.1em solid #6d6d6d",
      borderLeft: "0.1em solid #6d6d6d",
      borderBottom: "none"
    }
  },
  firstTab: {
    borderBottom: "0.1em solid #6d6d6d",
    "&:focus": {
      borderRight: "0.1em solid #6d6d6d",
      borderBottom: "0"
    },
    "&:selected": {
      borderRight: "0.1em solid #6d6d6d",
      borderBottom: "0"
    }
  },
  active_tab: {
    color: "blue"
  }
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
        return (tabGenerator(label,index, tabLabels.length, classes))
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
