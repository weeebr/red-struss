import React from "react";
import styled from "styled-components";

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
  cursor: pointer;
`;

const OverlayBg = () => {
  return <Bg />;
};

export default OverlayBg;
