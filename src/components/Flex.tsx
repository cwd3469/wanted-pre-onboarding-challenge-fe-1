import React from "react";
import styled, { CreateStyled } from "@emotion/styled";

interface PropsInterFace {
  children?: JSX.Element | JSX.Element[];
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
}

const Flex = (props: PropsInterFace): JSX.Element => {
  const CssStyled = styled.div`
    width: ${props.width};
    height: ${props.height};
    display: flex;
    flex-direction: ${props.flexDirection ? props.flexDirection : "column"};
    gap: 10px;
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
  `;
  return <CssStyled>{props.children}</CssStyled>;
};

export default Flex;
