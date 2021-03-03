import React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Container, Tabs, Tab } from "@material-ui/core";
import FlowerTab from "components/FlowerTab/FlowerTab";
import flowersData from "../utils/flowers.json";

const Flowers = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { flowerName = "all" } = params;
  const tabNameToIndex = {
    0: "all",
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
    all: 0,
    cosmos: 1,
    hyacinths: 2,
    lilies: 3,
    mums: 4,
    pansies: 5,
    roses: 6,
    tulips: 7,
    windflowers: 8,
  };
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[flowerName]);

  const handleChange = (event, newValue) => {
    history.push(`/flowers/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  function getFlowersByTab() {
    return selectedTab === 0 ? flowersData : flowersData.filter((flower) => flower.category === tabNameToIndex[selectedTab]);
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div aria-labelledby={`scrollable-force-tab-${index}`} hidden={value !== index} id={`scrollable-force-tabpanel-${index}`} role="tabpanel" {...other}>
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
      <Container maxWidth="md">
        <Box id="page-header">Flowers</Box>

        <AppBar id="flower-tab-bar" position="static">
          <Tabs scrollButtons="on" onChange={handleChange} value={selectedTab} variant="scrollable">
            <Tab id="tab-label" label="All" />
            <Tab id="tab-label" label="Cosmos" />
            <Tab id="tab-label" label="Hyacinths" />
            <Tab id="tab-label" label="Lilies" />
            <Tab id="tab-label" label="Mums" />
            <Tab id="tab-label" label="Pansies" />
            <Tab id="tab-label" label="Roses" />
            <Tab id="tab-label" label="Tulips" />
            <Tab id="tab-label" label="Windflowers" />
          </Tabs>
        </AppBar>

        <FlowerTab flowers={getFlowersByTab()} />
      </Container>
    </>
  );
};

export default Flowers;
