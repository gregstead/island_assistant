import React from "react";
import Tabs from "react-bulma-components/lib/components/tabs";

function Tab() {
  return (
    <>
      <Tabs type="toggle-rounded" fullwidth={true} align="centered">
        <Tabs.Tab active={false}>Cosmos</Tabs.Tab>
        <Tabs.Tab>Hyacinth</Tabs.Tab>
        <Tabs.Tab>Lilies</Tabs.Tab>
        <Tabs.Tab>Mums</Tabs.Tab>
        <Tabs.Tab>Pansies</Tabs.Tab>
        <Tabs.Tab>Roses</Tabs.Tab>
        <Tabs.Tab>Tulips</Tabs.Tab>
        <Tabs.Tab>Windflowers</Tabs.Tab>
      </Tabs>
    </>
  );
}

export default Tab;
