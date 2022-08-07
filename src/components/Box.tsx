import React from "react";
import styled from "@emotion/styled";

interface PropsInterFace {
  children?: JSX.Element | JSX.Element[] | string;
  width?: string;
  height?: string;
  bg?: string;
  position?: string;
  left?: string;
  top?: string;
  zIndex?: string;
  borderRadius?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Box = (props: PropsInterFace) => {
  const CssStyled = styled.div`
    width: ${props.width};
    height: ${props.height};
    padding: 20px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: 1px solid #ddd;
    border-radius: ${props.borderRadius ? props.borderRadius : "10px"};
    font-size: 20px;
    position: ${props.position};
    left: ${props.left};
    top: ${props.top};
    background-color: ${props.bg};
    z-index: ${props.zIndex};
    cursor: ${props.onClick ? "pointer" : ""};
  `;
  return <CssStyled onClick={props.onClick}>{props.children}</CssStyled>;
};

export default Box;
