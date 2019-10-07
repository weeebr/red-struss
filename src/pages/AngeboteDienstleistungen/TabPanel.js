import React from "react";
import styled from "styled-components";
import TabPanelAngebote from "./TabPanelAngebote";
import TabPanelEvent from "./TabPanelEvent";

const StyledTabPanel = styled.div`
  margin-bottom: 80px;
  padding-top: 20px;

  .info {
    background: #cde1f1;
    padding: 20px 20px 10px 40px;
    position: relative;
    overflow: hidden;
    margin-bottom: 60px;

    &::before {
      position: absolute;
      top: -45px;
      left: 0;
      content: "i";
      font-size: 98px;
      font-family: serif;
      color: #8abbe2;
      font-style: italic;
    }

    p {
      font-family: OpenSansItalic;
    }
  }
`;

export default ({ data }) => {
  if (data) {
    return (
      <StyledTabPanel>
        <TabPanelAngebote data={data} />
      </StyledTabPanel>
    );
  }

  return (
    <StyledTabPanel>
      <TabPanelEvent />
    </StyledTabPanel>
  );
};
