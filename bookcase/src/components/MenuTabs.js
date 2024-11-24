import { Tab, Tabs } from "@mui/material";
import { useContext, useState } from "react";
import TabPanel from "./TabPanel";
import Home from "../pages/Home";
import Reading from "../pages/Reading";
import Read from "../pages/Read";
import NextReadings from "../pages/NextReadings";
import { BooksContext } from "../context/BooksContext";
import Search from "../pages/Search";

export const MenuTabs = () => {
  const { 
   tabValue,
   setTabValue
  } = useContext(BooksContext); 

    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };

    return (
        <>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            sx={{ padding: 2 }}>
              <Tab value={0} label="Todos" />
              <Tab value={1} label="Lendo" />
              <Tab value={2} label="Lidos" />
              <Tab value={3} label="Pŕoximas leituras" />
              <Tab value={4} label="Buscar" />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Reading />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Read />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <NextReadings  />
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            <Search />
          </TabPanel>
        </>
    );
}

export default MenuTabs;