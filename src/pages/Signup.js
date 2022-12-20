import React from "react";
import styled from "styled-components";
import { StyledButton } from "../components/Button";
import { StyledInput } from "../components/Input";

const Signup = () => {
  return (
    <Flex>
      <LeftImage></LeftImage>
      <Main>
        <Stdiv>
          <StHead>회원가입</StHead>
          <div>
            <StyledInput placeholder="Email" width="300px" />
            <StyledButton width="50px">확인</StyledButton>
          </div>
          <div>
            <StyledInput placeholder="Nickname" />
          </div>
          <div>
            <StyledInput placeholder="Password" type="password" />
          </div>

          <ButtonArea>
            <StyledButton>SignUp</StyledButton>
            <StyledButton>이전으로</StyledButton>
          </ButtonArea>
        </Stdiv>
      </Main>
    </Flex>
  );
};

export default Signup;

const Stspan = styled.span`
  font-size: 2px;
`;

const Flex = styled.div`
  display: flex;
`;

const LeftImage = styled.div`
  background-image: url("https://img.siksinhot.com/seeon/1622598477140625.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  height: 100vh;
`;

const Stdiv = styled.div`
  width: 700px;
  height: 700px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  border: 3px solid #34495e;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHead = styled.h1`
  color: #34495e;
  margin: 100px;
  font-size: 40px;
`;

const Main = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 7px;
`;
