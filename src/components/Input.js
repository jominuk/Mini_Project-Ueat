import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 7px;
  font-size: 1em;
  margin: 3px;
  background: white;
  border-radius: 10px;
  color: #34495e;
  height: 30px;
  width: ${(props) => props.width || "350px"};
  outline: none;
  border: 1px solid #34495e;
  font-weight: 700;
  ::placeholder {
    color: #34495e;
    opacity: 0.5;
  }
`;
