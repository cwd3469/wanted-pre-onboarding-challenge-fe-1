import React from "react";
import { Button, Flex, Input } from "../../components";

const Join = () => {
  return (
    <Flex alignItems="center">
      <img width={"100px"} src="https://cdn.pixabay.com/photo/2019/12/07/14/55/labrador-4679457_1280.png" alt="" />
      <Input type="text" placeholder="이메일를 입력하세요" />
      <Input type="password " placeholder="비밀번호를 입력하세요" />
      <Input type="password " placeholder="비밀번호를 재확인 하세요" />
      <Button width="100%" onClick={() => {}} title="회원가입" />
    </Flex>
  );
};

export default Join;
