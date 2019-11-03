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
      top: -5px;
      left: 0;
      content: "i";
      font-size: 68px;
      top: -5px;
      left: 0;
      content: "i";
      color: #8abbe2;
      font-family: OpenSansItalic;
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
