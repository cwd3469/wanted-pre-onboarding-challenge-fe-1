import React from "react";
import styled from "@emotion/styled";
import Box from "./Box";

interface PropsInterFace {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CssStyled = styled.input`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 20px;
`;
const Input = (props: PropsInterFace) => {
  return <CssStyled autoFocus type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />;
};

const Textarea = (props: PropsInterFace) => {
  return <Box></Box>;
};

export default Input;
