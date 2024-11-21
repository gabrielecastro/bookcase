import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import TabPanel from "./TabPanel";
import Home from "../pages/Home";
import Reading from "../pages/Reading";
import Read from "../pages/Read";
import NextReadings from "../pages/NextReadings";

export const MenuTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            sx={{ padding: 2 }}>
              <Tab value={0} label="Todos" />
              <Tab value={1} label="Lendo" />
              <Tab value={2} label="Lidos" />
              <Tab value={3} label="Pŕoximas leituras" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Reading />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Read />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <NextReadings  />
          </TabPanel>
        </>
    );
}

export default MenuTabs;