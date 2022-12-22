import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainPostCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <CardWrapper
          onClick={() => {
            navigate(`/detail/${data.postId}`);
          }}
        >
          <NicknameCarrier>{data.userNickname}</NicknameCarrier>
          <ImageCarrier
            alt=""
            src={data.imageUrl}
            style={{ width: "320px", height: "230px" }}
          />
          <TitleCarrier>{data.title}</TitleCarrier>
          <ContentCarrier>{data.content}</ContentCarrier>
        </CardWrapper>
      </div>
    </>
  );
};

const CardWrapper = styled.div`
  background-color: white;
  width: 320px;
  height: 380px;
  border: 2px solid black;
  border-radius: 20px;
  margin: 100px 0 0 35px;
  text-align: center;
  z-index: 900px;
  box-shadow: 0px 1px 5px 1px #dddddd;
  :hover {
    box-shadow: 0px 5px 10px 1px #181818;
    transition: all 0.3s;
  }
`;
const NicknameCarrier = styled.div`
  text-align: center;
  margin: 10px;
`;
const ImageCarrier = styled.img`
  width: 320px;
  height: 200px;
  border: 0px solid black;
`;
const TitleCarrier = styled.span`
  font-size: 30px;
  font-style: bold;
`;
const ContentCarrier = styled.div``;

export default MainPostCard;
