import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;

  font-weight: ${(props) => props.fontWeight || ""};
  font-size: ${(props) => props.fontSize || "1em"};
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "120px"};
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "#34495e"};
  border: 1px solid ${(props) => props.background || "#34495e"};

  &:hover {
    background: #2c3e50;
    color: #fff;
  }
  ${(props) =>
    props.waring &&
    css`
      color: white;
      background: #e74c3c;
      border-color: #e74c3c;
    `}
`;
