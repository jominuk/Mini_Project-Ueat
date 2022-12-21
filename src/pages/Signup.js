import styled from "styled-components";
import { StyledButton } from "../components/Button";
import { StyledInput } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { __signUp } from "../redux/modules/signupSlice";
import { __nickCheck } from "../redux/modules/nickCheckSlice";
import { __idCheck } from "../redux/modules/idCheckSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idCheck } = useSelector((state) => state.idCheck);
  const { nickCheck } = useSelector((state) => state.nickCheck);
  //메세지검사
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  //비밀번호 검사확인
  const [onPassword, setOnPassword] = useState("");
  const [onPasswordConfirm, setOnPasswordConfirm] = useState("");
  //유효성검사
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  //초기값
  const [input, setInput] = useState({
    nickname: "",
    email: "",
  });
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

  const passwordConfirmACtion = (e) => {
    setOnPasswordConfirm(e.target.value);
    if (e.target.value === onPassword) {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
      setIsPasswordConfirm(false);
    }
  };

  const previousPasswordConf = (e) => {
    setOnPassword(e.target.value);
    if (onPasswordConfirm === "") {
      setPasswordMessage("비밀번호는 8글자 이상 입력해주세요!");
      setIsPassword(false);
      if (onPassword.length > 7) {
        setPasswordMessage("");
        setIsPassword(true);
      }
      return;
    }
    if (e.target.value === onPasswordConfirm) {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
      setIsPasswordConfirm(false);
    }
  };

  const onClickHandler = async () => {
    if (idCheck && isPassword && nickCheck && isPasswordConfirm) {
      const signUpResult = await dispatch(
        __signUp({ ...input, password: onPassword })
      );
      if (signUpResult.payload.message === "가입 완료") {
        alert("회원가입이 성공적으로 가입됐습니다.");
        navigate("/log");
      } else {
        alert("서버에러입니다.");
      }
    } else {
      alert("조건에 성립하지 않습니다, 다시 시도해주세요.");
    }
  };
  const onClickEmail = () => {
    dispatch(__idCheck(input.email));
  };

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
              width="300px"
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
              width="300px"
            />
            <StyledButton
              onClick={onClickEmail}
              disabled={!isEmail}
              width="50px"
            >
              확인
            </StyledButton>
            <div>{emailMessage}</div>
          </div>
          <div>
            <StyledInput
              name="password"
              onChange={previousPasswordConf}
              type="text"
              placeholder="Password"
            />
            <div>{passwordMessage}</div>
            <StyledInput
              name="passwordConfirm"
              onChange={passwordConfirmACtion}
              type="text"
              placeholder="Password Confirm"
            />
            <div>{passwordConfirmMessage}</div>
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

const Flex = styled.div`
  display: flex;
`;

const Layout = styled.div`
  width: 430px;
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
  justify-content: center;
  gap: 7px;
`;

// const ButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;
// const ButtonWrapper2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;
