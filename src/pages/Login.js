import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../components/Button";
import { StyledInput } from "../components/Input";
import { __loginUser } from "../redux/modules/userSlice";

const Login = () => {
  return (
    <Flex>
      <LeftImage></LeftImage>
      <Main>
        <Stdiv>
          <StHead>로그인</StHead>
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Password" />
          <ButtonArea>
            <StyledButton>Sign up</StyledButton>
            <StyledButton>Sign in</StyledButton>
          </ButtonArea>
        </Stdiv>
      </Main>
    </Flex>
  );
};

export default Login;

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

// import React, { useState } from "react";

// import { useEffect } from "react";
// /* Styles */
// import styled from "styled-components";

// /* Routes */
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const request = useSelector((state) => state.userReducer);

//   const [id, setId] = useState("");
//   const [pw, setPw] = useState("");

//   //   const loginHandler = async () => {
//   //     dispatch(
//   //       loginDB({
//   //         username: id,
//   //         password: pw,
//   //       })
//   //     );
//   //   };
//   return (
//     <>
//       <UserFormWrap>
//         <UserPageBox>
//           <UserTitle>Welcome!</UserTitle>
//           <InputBox
//             type="text"
//             onChange={(event) => {
//               setId(event.target.value);
//             }}
//             placeholder="ID"
//             required
//           />
//           <InputBox
//             type="password"
//             onChange={(event) => {
//               setPw(event.target.value);
//             }}
//             placeholder="PW"
//             required
//           />
//           <LoginBtnWrap>
//             <button
//               style={{
//                 marginTop: "6px",
//                 marginBottom: "10px",
//               }}
//             >
//               Sign In
//             </button>
//             <Link to="/signup">
//               <span
//                 style={{
//                   fontSize: "12px",
//                   fontWeight: "400",
//                   color: "black",
//                 }}
//               >
//                 Create Account
//               </span>
//             </Link>
//           </LoginBtnWrap>
//         </UserPageBox>
//       </UserFormWrap>
//     </>
//   );
// };

// export default Login;

// /* Header 아래로 보이는 main-box */
// export const UserFormWrap = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media screen and (max-width: 800px) {
//     margin-top: 10px;
//   }
// `;

// export const UserPageBox = styled.div`
//   box-sizing: border-box;
//   width: 500px;
//   height: 350px;
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid #d2d2d2;
//   border-radius: 8px;
//   @media screen and (max-width: 800px) {
//     border: none;
//   }
// `;

// export const UserTitle = styled.div`
//   font-size: 50px;
//   margin-top: 10px;
//   margin-bottom: 20px;
// `;

// export const InputBox = styled.input`
//   width: 100%;
//   height: 2rem;
//   border: none;
//   border-bottom: 1.5px solid black;
//   margin-bottom: 10px;
//   &::placeholder {
//     color: black;
//   }
// `;

// export const LoginBtnWrap = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// `;
