import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { __deleteComment, __patchComment } from "../redux/modules/commentSlice";

const CommentList = ({ id, el }) => {
  const dispatch = useDispatch();
  const { commentList } = useSelector((state) => state.commentPost);

  const comm = commentList.find((item) => {
    return item.id === parseInt(id);
  });

  const [isEditing, setIsEditing] = useState(false);

  const [inputChange, setInputChange] = useState({ comment: "" });
  console.log(commentList);

  const delClickHandler = (id) => {
    dispatch(__deleteComment(id));
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
            <input
              onChange={(e) => {
                setInputChange({ ...inputChange, comment: e.target.value });
              }}
              type="text"
              placeholder="댓글 수정란"
            />
          </>
        )}
        <button
          type="button"
          onClick={
            isEditing ? toggleEditing : () => delClickHandler(el.commentId)
          }
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
      </div>
    </>
  );
};

export default CommentList;
