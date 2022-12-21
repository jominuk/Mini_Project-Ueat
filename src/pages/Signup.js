import styled from "styled-components";
import { StyledButton } from "../components/Button";
import { StyledInput } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { __signUp } from "../redux/modules/signupSlice";
import { __nickCheck } from "../redux/modules/nickCheckSlice";
import { __idCheck } from "../redux/modules/idCheckSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const { idCheck } = useSelector((state) => state.idCheck);

  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  //유효성검사
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  //초기값
  const [input, setInput] = useState({ nickname: "", email: "", password: "" });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
    switch (name) {
      case "nickname":
        if (value.length > 2 && value.length < 20) {
          setNicknameMessage("");
          setIsNickname(true);
        } else {
          setNicknameMessage("닉네임은 2글자 이상 20글자 이하로 입력해주세요!");
          setIsNickname(false);
        }
        break;
      case "email":
        // const emailRegExp =
        // /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        const a = input.email;
        if (!a.includes("@") && !a.includes(".")) {
          setEmailMessage("이메일의 형식이 올바르지 않습니다!");
          setIsEmail(false);
        } else {
          setEmailMessage("");
          setIsEmail(true);
        }
        break;
      default:
        return;
    }
  };
  const onClickHandler = () => {
    dispatch(__signUp(input));
  };
  const onClickEmail = () => {
    // const a = input.email;
    // if (!a.includes("@") && !a.includes(".")) return;
    dispatch(__idCheck(input.email));

    // idCheck
    //   ? alert("사용할 수 있는 이메일 입니다.")
    //   : alert("중복 된 이메일 입니다.");
  };

  // const onClickPassword = (e) => {
  //   const currentPassword = e.target.value;
  //   setInput.Password(currentPassword);
  //   const passwordRegExp =
  //     /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  //   if (!passwordRegExp.test(currentPassword)) {
  //     setPasswordMessage(
  //       "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
  //     );
  //     setIsPassword(false);
  //   } else {
  //     setPasswordMessage("안전한 비밀번호 입니다.");
  //     setIsPassword(true);
  //   }
  // };

  const onClickNickname = () => {
    dispatch(__nickCheck({ nickname: input.nickname }));
  };

  return (
    <Flex>
      <LeftImage></LeftImage>
      <Main>
        <Stdiv>
          <StHead>회원가입</StHead>
          <div>
            <StyledInput
              name="nickname"
              onChange={onChangeHandler}
              type="text"
              placeholder="Nickname"
            />
            <StyledButton
              onClick={onClickNickname}
              disabled={!isNickname}
              width="50px"
            >
              확인
            </StyledButton>
          </div>
          <span>{nicknameMessage}</span>
          <div>
            <StyledInput
              name="email"
              onChange={onChangeHandler}
              type="text"
              placeholder="Email"
            />
            <StyledButton onClick={onClickEmail} width="50px">
              확인
            </StyledButton>
            <div>{emailMessage}</div>
          </div>
          <div>
            <StyledInput
              name="password"
              onChange={onChangeHandler}
              type="text"
              placeholder="Password"
            />
            <StyledButton width="50px">확인</StyledButton>
          </div>

          <ButtonArea>
            <StyledButton onClick={onClickHandler} type="submit">
              SignUp
            </StyledButton>
            <StyledButton type="submit">SignIn</StyledButton>
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
