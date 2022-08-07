import React from "react";
import { Box, Button, Flex } from "../../../components";
import { useNavigate } from "react-router-dom";
import ItemModal, { ForaCase } from "./ItemModal";
import styled from "@emotion/styled";
interface PropsInterface {
  text?: string;
  id?: string;
}

const TodoTitle = styled.p`
  margin-right: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 190px;
  height: 1.2em;
  white-space: nowrap;
`;

const ItemBox = (props: PropsInterface) => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState<ForaCase>(ForaCase.view);
  const [open, setOpen] = React.useState<boolean>(false);
  const closeEvent = () => setOpen(false);
  const ItemDetailsIn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    console.log(props.id);
    setForm(ForaCase.view);
    setOpen(true);
  };
  const ItemRemove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log(props.id);
    console.log("삭제");
  };
  const ItemEdit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setForm(ForaCase.edit);
    setOpen(true);
  };
  return (
    <>
      <Box width="100%" onClick={ItemDetailsIn}>
        <Flex flexDirection="row" alignItems="center" justifyContent="end">
          <TodoTitle>{props.text ? props.text : "할일을 입력하세요"}</TodoTitle>
          {props.id ? (
            <>
              <Button title="수정" onClick={ItemEdit} />
              <Button title="삭제" onClick={ItemRemove} />
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Box>
      {open ? <ItemModal form={form} close={closeEvent}></ItemModal> : ""}
    </>
  );
};

export default ItemBox;
