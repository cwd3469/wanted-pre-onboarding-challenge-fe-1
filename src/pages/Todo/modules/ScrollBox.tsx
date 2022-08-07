import styled from "@emotion/styled";
import React from "react";
import { Flex } from "../../../components";

interface PropsInterFace {
  children: JSX.Element | JSX.Element[];
}

const ScrollBox = (props: PropsInterFace) => {
  const CssStyled = styled.div`
    max-height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px;
    border: 1px solid #eee;
  `;
  return (
    <CssStyled>
      <Flex>{props.children}</Flex>
    </CssStyled>
  );
};

export default ScrollBox;
