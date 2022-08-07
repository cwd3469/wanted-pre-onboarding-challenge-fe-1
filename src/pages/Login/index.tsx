import React from "react";
import { Input, Button, Flex } from "../../components";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const joinNavigate = () => navigate("/auth/join");
  return (
    <Flex alignItems="center">
      <img width={"100px"} src="https://cdn.pixabay.com/photo/2014/04/03/00/32/padlock-308589_1280.png" alt="" />
      <Input type="text" placeholder="아이디를 입력하세요" />
      <Input type="password " placeholder="비밀번호를 입력하세요" />
      <Button width="100%" onClick={() => {}} title="로그인" />
      <Flex flexDirection="row" justifyContent="end" width="100%">
        <Button onClick={joinNavigate} title="회원가입" />
      </Flex>
    </Flex>
  );
};

export default Login;
