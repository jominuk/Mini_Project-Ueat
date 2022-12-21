import React, { useEffect } from "react";
import styled from "styled-components";
import MainPostCard from "../components/MainPostCard";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { __getPosts } from "../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie } from "../shared/cookie";
import { loginCheck } from "../redux/modules/userSlice";
import { __getPost } from "../redux/modules/postSlice";
const MainPost = () => {
  const { number } = useParams();
  useEffect(() => {
    __getPost(number);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.user);

  const logoutButton = () => {
    const a = dispatch(loginCheck(false));
    if (a.payload === false) deleteCookie("token");
  };

  const loginButton = () => {
    navigate("/log");
  };
  return (
    <>
      <WholeCard>
        <ButtonGroup>
          <ButtonTop>한식</ButtonTop>
          <ButtonTop>중식</ButtonTop>
          <ButtonTop>일식</ButtonTop>
          <ButtonTop>양식</ButtonTop>
          <ButtonTop>기타</ButtonTop>
          <WritePost
            onClick={() => {
              navigate("/post");
            }}
          >
            글쓰기
          </WritePost>
          {!login ? (
            <SigninButton onClick={loginButton}>Login</SigninButton>
          ) : (
            <SigninButton onClick={logoutButton}>Logout</SigninButton>
          )}
        </ButtonGroup>
        <MainCardWrapper>
          {/* {posts?.map((post) => {}} */}
          {/* <MainPostCard />
          <MainPostCard />
          {/* to={`/${post.id}`} key={post.id} */}
          <Link to="/detail/:id">
            <MainPostCard />
          </Link>
          <MainPostCard />
          <MainPostCard />

          {/* <MainPostCard />
          <MainPostCard />
          <MainPostCard /> */}
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
export default MainPost;
