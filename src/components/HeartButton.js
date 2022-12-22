import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __likeHeart } from "../redux/modules/postSlice";
import { useSelector } from "react-redux";

const HeartButton = () => {
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.post);

  const likeButton = async () => {
    const isLike = await dispatch(__likeHeart(post.postId));
  };

  return (
    <div>
      <LikeButton onClick={likeButton}>{post.isLiked ? "❤️" : "🤍"}</LikeButton>
      <span>{post.likesNum}</span>
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
