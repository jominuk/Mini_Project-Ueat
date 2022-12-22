import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { __deleteComment, __patchComment } from "../redux/modules/commentSlice";
import styled from "styled-components";

const CommentList = ({ id, el }) => {
  const dispatch = useDispatch();
  const { commentList } = useSelector((state) => state.commentPost);
  console.log(
    "🚀 ~ file: CommentList.js:10 ~ CommentList ~ commentList",
    commentList
  );

  const comm = commentList.find((item) => {
    return item.id === parseInt(id);
  });

  const [isEditing, setIsEditing] = useState(false);

  const [inputChange, setInputChange] = useState({ comment: "" });

  const delClickHandler = () => {
    dispatch(__deleteComment({}));
  };
  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };
  const EditClickHandler = () => {
    dispatch(__patchComment({ id, comment: inputChange.comment }));
  };
  return (
    <>
      <div>
        <p>{el.content}</p>
      </div>
      <div>
        {isEditing && (
          <>
            <UpdateCommentInput
              onChange={(e) => {
                setInputChange({ ...inputChange, comment: e.target.value });
              }}
              type="text"
              placeholder="댓글 수정란"
            />
          </>
        )}
        <ButtonWrapper>
          <button
            type="button"
            onClick={isEditing ? toggleEditing : () => delClickHandler(id)}
          >
            {isEditing ? "취소하기" : "삭제하기"}
          </button>
          <button
            type="button"
            onClick={
              isEditing ? () => EditClickHandler(inputChange) : toggleEditing
            }
          >
            {isEditing ? "완료하기" : "수정하기"}
          </button>
        </ButtonWrapper>
      </div>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 800px;
  height: 100%;
  border-top: 1.5px solid black;
`;
const UpdateCommentInput = styled.input`
  width: 100%;
  height: 30px;
  border: transparent;
  border-radius: 5px;
`;

export default CommentList;
