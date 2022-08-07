import React from "react";
import styled from "@emotion/styled";
import Flex from "./Flex";
import Box from "./Box";

interface LayoutType {
  children: JSX.Element;
}

const Layout = (props: LayoutType) => {
  const CssStyle = styled.div`
    width: 456px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
  `;
  return (
    <Box width="100%" height="100vh">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <CssStyle>{props.children}</CssStyle>
      </Flex>
    </Box>
  );
};

export default Layout;
