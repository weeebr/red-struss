import React from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import angeboteKmu from "../../assets/data/angebote-kmu";
import angebotePrivat from "../../assets/data/angebote-privat";
import styled from "styled-components";
import { colors } from "../../theme";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const StyledTabs = styled.div`
  margin-top: 40px;

  .MuiAppBar-root {
    box-shadow: none;

    .MuiTabs-flexContainer {
      background: white;

      .MuiTab-root {
        &.Mui-selected,
        &:focus,
        &:hover {
          color: ${colors.primaryRed};
          font-weight: bold;
        }
      }
    }

    .MuiTabs-indicator {
      &[style] {
        left: calc(100% - (${props => 3 - props.value} * 260px)) !important;
      }
      background-color: ${colors.primaryRed};
    }
  }
  .MuiBox-root {
    padding: 24px 0 0 0;
  }
`;

export default ({ current, onTabClick }) => {
  const [value, setValue] = React.useState(parseInt(current) || 0);

  const handleChange = (event, index) => {
    setValue(index);
    onTabClick(index);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <StyledTabs value={value}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Angebote"
          aria-hidden="false"
        >
          <Tab label="Unternehmen" {...a11yProps(0)} />
          <Tab label="Privater Haushalt" {...a11yProps(1)} />
          <Tab label="Event-Veranstalter" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel index={0} value={value} data={angeboteKmu} dir="ltr" />
        <TabPanel index={1} value={value} data={angebotePrivat} dir="ltr" />
        <TabPanel index={2} value={value} dir="ltr" />
      </SwipeableViews>
    </StyledTabs>
  );
};
