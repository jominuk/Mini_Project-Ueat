import React from "react";
import styled from "styled-components";
import { useState } from "react";
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
          <ImageCarrier alt="" src={data.imageUrl} />
          <TitleCarrier>{data.title}</TitleCarrier>
          <ContentCarrier>{data.content}</ContentCarrier>
        </CardWrapper>
      </div>
    </>
  );
};

const CardWrapper = styled.div`
  width: 320px;
  height: 380px;
  border: 1px solid black;
  border-radius: 14px;
  margin: 100px 0 0 35px;
  :hover {
    border: 3px solid black;
  }
`;
const NicknameCarrier = styled.div`
  width: 320px;
  height: 20px;
  border: 0px solid black;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;
const ImageCarrier = styled.img`
  width: 320px;
  height: 200px;
  border: 0px solid black;
`;
const TitleCarrier = styled.span`
  width: 320px;
  height: 30px;
  font-size: 20px;
  font-style: bold;
`;
const ContentCarrier = styled.div`
  width: 320px;
  height: 100px;
  border: 0.5px;
  min-height: max-content;
`;

export default MainPostCard;
