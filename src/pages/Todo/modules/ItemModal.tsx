import React from "react";
import { Flex, Box, Button, Input } from "../../../components";
import styled from "@emotion/styled";
import ScrollBox from "./ScrollBox";

export enum ForaCase {
  edit,
  view,
}

interface PropsInterFace {
  form: ForaCase;
  close?: () => void;
}

const ItemModal = (props: PropsInterFace) => {
  const [title, setTitle] = React.useState<string>("");
  const Title = styled.p`
    word-break: break-all;
    font-size: 21px;
    line-height: 1.4;
  `;
  const Contents = styled.p`
    word-break: break-all;
    font-size: 16px;
    line-height: 1.5;
  `;
  const titleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value);
    // e.stopPropagation();
    setTitle(e.currentTarget.value);
  };
  return (
    <Box position="absolute" left="0px" top="0px" bg="rgba(000, 000, 000, 0.5)" width="100%" height="100%" zIndex="18" borderRadius="0">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Box bg="#fff">
          <Flex>
            <Flex justifyContent="end" flexDirection="row">
              {props.form === ForaCase.edit ? <Button title="수정" onClick={props.close}></Button> : <></>}
              <Button title={props.form === ForaCase.view ? "나가기" : "취소"} onClick={props.close}></Button>
            </Flex>
            {props.form === ForaCase.edit ? (
              <Input value={title} onChange={titleOnChange} />
            ) : (
              <Box bg="#fff" width="420px">
                <Title> ItemModalItemModalItemModalItemModalItemModal</Title>
              </Box>
            )}
            <ScrollBox>
              {props.form === ForaCase.edit ? (
                <></>
              ) : (
                <Box bg="#fff" width="400px">
                  <Contents>
                    ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal
                    ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal
                    ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal
                    ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal ItemModalItemModalItemModalItemModalItemModal{" "}
                  </Contents>
                </Box>
              )}
            </ScrollBox>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemModal;
