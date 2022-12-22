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
    <div>
      <StCommentBox>
        <input type="text" name="comment" onChange={inputHandler} />
        <button onClick={onClickHandler}> 작성 </button>
      </StCommentBox>
    </div>
  );
};

export default Comment;

const StCommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  gap: 30px;
`;
