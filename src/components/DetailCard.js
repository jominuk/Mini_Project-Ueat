import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { __deletePost, __createGet } from "../redux/modules/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";
import HeartButton from "./HeartButton";
import CommentList from "./CommentList";
import { __getComment } from "../redux/modules/commentSlice";

const DetailCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const detailParams = useParams();

  const { post } = useSelector((state) => state.post);
  // const nickname = useSelector((state) => state.nickCheck.nickname);
  // console.log(nickname);
  const { commentList } = useSelector((state) => state.commentPost);

  const DeleteButton = () => {
    dispatch(__deletePost(id));
  };

  useEffect(() => {
    dispatch(__createGet(id));
  }, []);

  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch]);

  return (
    <>
      <div>
        <div>
          <DetailButtonTop onClick={() => navigate("/main/0")}>
            back
          </DetailButtonTop>
          <DetailButtonTop2 onClick={() => navigate("/log")}>
            signin
          </DetailButtonTop2>
        </div>
        <DetailCardWrapper>
          <DetailNicknameCarrier>
            <div> {post?.userNickname} </div>
            <div> {post?.categoryId} </div>
          </DetailNicknameCarrier>

          <DetailImageCarrier
            src={post?.imageUrl}
            style={{ width: "300px", height: "320px" }}
          />

          <HeartButton />
          <DetailTitleCarrier>{post?.title}</DetailTitleCarrier>
          <DetailContentCarrier>{post?.content}</DetailContentCarrier>
        </DetailCardWrapper>
        <div>
          <DetailButtonEdit> Edit </DetailButtonEdit>
          <DetailButtonDEL onClick={DeleteButton}> Delete </DetailButtonDEL>
        </div>
      </div>
      <Comment id={id} />
      {commentList?.map((el, i) => {
        return (
          <CommentList key={`main-comment-${i}`} id={id} el={el}></CommentList>
        );
      })}
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
  display: flex;
  width: 600px;
  height: 40px;
  border: 0px solid black;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  justify-content: space-between;
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
