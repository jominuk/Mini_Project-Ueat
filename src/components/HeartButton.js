import React, { useState } from "react";
import styled from "styled-components";
// import { useDispatch, useEffect } from "react-redux";
// import { __likeHeart } from "../redux/modules/postSlice";

const HeartButton = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  // const dispatch = useDispatch();

  const likeButton = () => {
    if (like === true) {
      setCount(count - 1);
      setLike(false);
    } else {
      setCount(count + 1);
      setLike(true);
    }
  };

  // useEffect(() => {
  //   dispatch(__likeHeart);
  // }, []);

  return (
    <div>
      <LikeButton onClick={likeButton}>{like ? "❤️" : "🤍"}</LikeButton>
      <span> {count} </span>
    </div>
  );
};

export default HeartButton;

const LikeButton = styled.button`
  border: 0 solid transparent;
  background-color: transparent;
  color: gray;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
`;
