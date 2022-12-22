import React, { useEffect } from "react";
import styled from "styled-components";
import MainPostCard from "../components/MainPostCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie, getCookie } from "../shared/cookie";
import { loginCheck } from "../redux/modules/userSlice";
import { __getPostBox } from "../redux/modules/postSlice";

const MainPost = () => {
  const { number } = useParams();
  useEffect(() => {
    dispatch(__getPostBox(number));
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.user);

  const logoutButton = () => {
    const a = dispatch(loginCheck(false));
    if (a.payload === false) deleteCookie("token");
  };
  const { postList } = useSelector((state) => state.post);

  const ClickKorean = () => {
    dispatch(__getPostBox("0"));
  };
  const ClickChinese = () => {
    dispatch(__getPostBox("1"));
  };
  const ClickJapanese = () => {
    dispatch(__getPostBox("2"));
  };
  const ClickWestern = () => {
    dispatch(__getPostBox("3"));
  };
  const ClickEtc = () => {
    dispatch(__getPostBox("4"));
  };

  return (
    <>
      <WholeCard>
        <ButtonGroup>
          <HomeButton
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로
          </HomeButton>

          <ButtonTop onClick={ClickKorean} type="button" name="">
            한식
          </ButtonTop>
          <ButtonTop onClick={ClickChinese}>중식</ButtonTop>
          <ButtonTop onClick={ClickJapanese}>일식</ButtonTop>
          <ButtonTop onClick={ClickWestern}>양식</ButtonTop>
          <ButtonTop onClick={ClickEtc}>기타</ButtonTop>
          <WritePost
            onClick={() => {
              navigate("/post");
            }}
          >
            글쓰기
          </WritePost>
          {!login ? (
            <SigninButton
              onClick={() => {
                navigate("/log");
              }}
            >
              Login
            </SigninButton>
          ) : (
            <SigninButton onClick={logoutButton}>Logout</SigninButton>
          )}
        </ButtonGroup>
        <MainCardWrapper>
          {postList?.map((data) => {
            return (
              <MainPostCard
                key={`main-post-${data.postId}`}
                data={data}
              ></MainPostCard>
            );
          })}
        </MainCardWrapper>
        <LeftHeader></LeftHeader>
      </WholeCard>
    </>
  );
};

const LeftHeader = styled.div`
  height: 40vh;
  width: 20vw;
  background-image: url("https://cdn.discordapp.com/attachments/1046343861129191446/1053529972632977468/vecteezy_one-continuous-line-drawing-of-a-young-male-chef-great-food_7435152.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 35vh;
  left: -15vw;
  z-index: -1;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonTop = styled.button`
  width: 80px;
  border-radius: 25px;
  margin: 30px 0 0 35px;
  transition: width 0.5s ease-in-out;
  font-size: 40px;
  :hover {
    width: 110px;
  }
`;
const WholeCard = styled.div`
  width: 1200px;
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
const MainCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const WritePost = styled.button`
  margin: 200px 0 0 1000px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;
const SigninButton = styled.button`
  margin: 10px 0 0 1000px;
  position: absolute;
  font-size: 15px;
  border-color: grey;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;

const HomeButton = styled.button`
  margin: 200px 920px 0 0px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;
export default MainPost;
