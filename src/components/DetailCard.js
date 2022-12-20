import React from "react";
import styled from "styled-components";
// import { __deletePost } from "../redux/modules/postSlice";
// import { useDispatch } from "react-redux";

const DetailCard = () => {
  // const dispatch = useDispatch();

  // const DeleteButton = () => {
  //   dispatch(__deletePost(id));
  // };

  return (
    <>
      <div>
        <div>
          <DetailButtonTop>back</DetailButtonTop>
          <DetailButtonTop2>signin</DetailButtonTop2>
        </div>
        <DetailCardWrapper>
          <DetailNicknameCarrier>nickname</DetailNicknameCarrier>
          <DetailImageCarrier alt="" />
          <DetailTitleCarrier>Title</DetailTitleCarrier>
          <DetailContentCarrier>content</DetailContentCarrier>
        </DetailCardWrapper>
        <div>
          <DetailButtonEdit>Edit</DetailButtonEdit>
          <DetailButtonDEL
          // onClick={() => DeleteButton(post.id)}
          >
            Delete
          </DetailButtonDEL>
        </div>
      </div>
    </>
  );
};

const DetailCardWrapper = styled.div`
  width: 600px;
  height: 550px;
  border: 1px solid black;
  border-radius: 14px;
  margin: 100px 0 0 35px;
`;
const DetailNicknameCarrier = styled.div`
  width: 600px;
  height: 40px;
  border: 0px solid black;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;
const DetailImageCarrier = styled.img`
  width: 600px;
  height: 300px;
  border: 0px solid black;
`;
const DetailTitleCarrier = styled.span`
  width: 600px;
  height: 50px;
  font-size: 30px;
  font-style: bold;
`;
const DetailContentCarrier = styled.div`
  width: 600px;
  height: 170px;
  border: 0.5px;
  min-height: max-content;
`;

const DetailButtonTop = styled.div`
  margin: 10px 0 0 -140px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;
const DetailButtonTop2 = styled.div`
  margin: 10px 0 0 760px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;

const DetailButtonDEL = styled.div`
  margin: 10px 0 0 260px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;
const DetailButtonEdit = styled.div`
  margin: 10px 0 0 340px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;
export default DetailCard;
