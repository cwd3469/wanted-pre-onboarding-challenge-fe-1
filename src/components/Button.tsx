import React from "react";
import styled from "@emotion/styled";

interface ButtonType {
  title: string;
  onClick?: any;
  width?: string;
}

const Button = (props: ButtonType): JSX.Element => {
  const CssStyled = styled.button`
    width: ${props.width};
    background-color: #fff;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    &:active {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px inset;
    }
  `;
  return <CssStyled onClick={props.onClick}>{props.title}</CssStyled>;
};

export default Button;
