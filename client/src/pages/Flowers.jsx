import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Container, Tabs, Tab } from "@material-ui/core";
import About from "./aAbout";
import Cosmos from "./aCosmos";
import Hyacinths from "./aHyacinths";
import Lilies from "./aLilies";
import Mums from "./aMums";
import Pansies from "./aPansies";
import Roses from "./aRoses";
import Tulips from "./aTulips";
import Windflowers from "./aWindflowers";

const Flowers = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const tabNameToIndex = {
    0: "about",
    1: "cosmos",
    2: "hyacinths",
    3: "lilies",
    4: "mums",
    5: "pansies",
    6: "roses",
    7: "tulips",
    8: "windflowers",
  };
  const indexToTabName = {
    about: 0,
    cosmos: 1,
    hyacinths: 2,
    lilies: 3,
    mums: 4,
    pansies: 5,
    roses: 6,
    tulips: 7,
    windflowers: 8,
  };
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/flowers/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  return (
    <>
    <Container maxWidth='lg'>
      <AppBar position="static" style={{ backgroundColor: "#FFB075", marginBottom: "50px", color: "#333", fontWeight: "bolder" }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleChange} 
          variant="scrollable" 
          scrollButtons="on" 
          centered
        >
          <Tab label="About" />
          <Tab label="Cosmos" />
          <Tab label="Hyacinths" />
          <Tab label="Lilies" />
          <Tab label="Mums" />
          <Tab label="Pansies" />
          <Tab label="Roses" />
          <Tab label="Tulips" />
          <Tab label="Windflowers" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Cosmos />}
      {selectedTab === 2 && <Hyacinths />}
      {selectedTab === 3 && <Lilies />}
      {selectedTab === 4 && <Mums />}
      {selectedTab === 5 && <Pansies />}
      {selectedTab === 6 && <Roses />}
      {selectedTab === 7 && <Tulips />}
      {selectedTab === 8 && <Windflowers />}
    </Container>
    </>
  );
};

export default Flowers;
