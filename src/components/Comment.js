import React from "react";
import styled from "styled-components";

const Comment = () => {
  return (
    <div>
      <StCommentBox>
        <input />
        <button> 작성 </button>
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
