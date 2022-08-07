import React from "react";
import { Button, Flex } from "../../components";
import ItemBox from "./modules/ItemBox";
import ScrollBox from "./modules/ScrollBox";
import "./todo.css";

const Todo = (): JSX.Element => {
  return (
    <>
      <Flex alignItems="center">
        <img width={"200px"} src="https://cdn.pixabay.com/photo/2016/05/30/13/38/cat-1424748_1280.png" alt="" />
        <ScrollBox>
          <ItemBox text="sasdasdasdasdasdadsdasd" id="s" />
          <ItemBox text="s" id="s" />
          <ItemBox text="s" id="s" />
          <ItemBox text="s" id="s" />
          <ItemBox text="s" id="s" />
        </ScrollBox>
        <Button width="100%" onClick={() => {}} title="로그인" />
      </Flex>
    </>
  );
};

export default Todo;
