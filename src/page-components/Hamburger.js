import React from "react";
import styled from "styled-components";
import { colors } from "./../theme";

const StyledHamburger = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0;
  margin-left: 0;
  z-index: 11;
  outline: none;
  cursor: pointer;
  background: ${colors.primaryRed};
  transition: all 0.6s ease, top 0.3s ease;

  &:hover {
    background: black;

    div {
      background: ${colors.primaryRed};

      &:nth-child(1) {
        top: 14px;
      }

      &:nth-child(2) {
        left: 14px;
        top: 22px;
      }

      &:nth-child(3) {
        top: 30px;
      }
    }
  }

  &.open {
    position: fixed;
    top: 176px;
    margin-left: 48px;

    @media (max-width: 960px) {
      top: 244px;
    }

    div {
      &:nth-child(1) {
        top: 22px;
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        top: 22px;
        transform: rotate(-45deg);
      }
    }
  }

  div {
    position: absolute;
    left: 10px;
    width: 28px;
    height: 2px;
    background: black;
    opacity: 1;
    transition: all 0.3s ease;

    &:nth-child(1) {
      top: 11px;
    }

    &:nth-child(2) {
      top: 22px;
    }

    &:nth-child(3) {
      top: 33px;
    }
  }
`;

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <>
      <StyledHamburger
        className={isOpen ? "open" : null}
        onClick={() => {
          onClick(!isOpen);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledHamburger>
    </>
  );
};

export default Hamburger;
