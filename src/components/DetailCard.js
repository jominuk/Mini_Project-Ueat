import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  __deletePost,
  __createGet,
  __editPost,
} from "../redux/modules/postSlice";
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
  console.log(post);

  const [edit, setEdit] = useState(""); //수정버튼 클릭 시
  const [input, setInput] = useState({}); // 인풋으로 바꾸게

  const editComplete = () => {
    console.log();
    dispatch(
      __editPost({
        title: input.title,
        content: input.content,
        categoryId: post.categoryId,
        postId: post.postId,
      })
    );
    setEdit("");
  };

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  // const DeleteButton = () => {
  //   dispatch(__deletePost(id));
  const DeleteButton = async () => {
    const deleteComplte = await dispatch(__deletePost(id));
    if (deleteComplte.payload !== "") {
      alert("삭제완료");
      navigate("/main/0");
    }
  };

  useEffect(() => {
    dispatch(__createGet(id));
    dispatch(__createGet(id));
  }, []);

  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch]);

  return id === edit ? (
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
          </DetailNicknameCarrier>

          <DetailImageCarrier
            src={post?.imageUrl}
            style={{ width: "300px", height: "320px" }}
          />

          <HeartButton />

          <input
            onChange={onChangeInput}
            name="title"
            value={input.title}
            placeholder={post.title}
          />

          <input
            onChange={onChangeInput}
            name="content"
            value={input.content}
            placeholder={post.content}
          />
        </DetailCardWrapper>

        <div>
          <DetailButtonEdit onClick={() => editComplete(id)}>
            {" "}
            Complete{" "}
          </DetailButtonEdit>
          <DetailButtonDEL onClick={() => setEdit("")}>
            {" "}
            Cancel{" "}
          </DetailButtonDEL>
        </div>
      </div>
      <Comment />
    </>
  ) : (
    <>
      <div>
        <div>
          <DetailButtonTop onClick={() => navigate("/main/:id")}>
            back
          </DetailButtonTop>
          <DetailButtonTop2 onClick={() => navigate("/log")}>
            signin
          </DetailButtonTop2>
        </div>
        <DetailCardWrapper>
          <DetailNicknameCarrier>
            <div> {post?.userNickname} </div>
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
          <DetailButtonEdit
            onClick={() => {
              setEdit(id);
            }}
          >
            {" "}
            Edit{" "}
          </DetailButtonEdit>
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
  border: 3px solid black;
  border-radius: 14px;
  margin: 100px 0 0 35px;
  text-align: center;
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
  cursor: pointer;
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
