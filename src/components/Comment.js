import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __postComment } from "../redux/modules/commentSlice";

const Comment = ({ id }) => {
  const dispatch = useDispatch();

  const [inputC, setInputC] = useState({ comment: "" });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputC({ ...inputC, [name]: value });
  };

  useEffect(() => {}, [dispatch]);

  const onClickHandler = () => {
    dispatch(__postComment({ comment: inputC.comment, id }));
    // setInput([...todos, input]);
  };

  return (
    <CommentBoxStruc>
      <StCommentBox>
        <InputBox
          type="text"
          name="comment"
          onChange={inputHandler}
          placeholder="댓글작성"
        />
        <button onClick={onClickHandler}> 작성 </button>
      </StCommentBox>
    </CommentBoxStruc>
  );
};

export default Comment;

const InputBox = styled.input`
  width: 600px;
  height: 30px;
`;

const CommentBoxStruc = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: 50%;
`;
const StCommentBox = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin: 60px;
  width: 100%;
  border: 2px solid moccasin;
  border-radius: 10px;
  /* margin: 8px 0; */
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
`;
