
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../components/Button";
import { StyledImage } from "../components/Image";
import { StyledInput } from "../components/Input";

const Detail2 = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const selectMenu = () => setOpen(!Open);
  const options = ["한식", "양식", "일식", "중식", "기타"];

  const onOptionClicked = (value) => {
    console.log(value);
    setSelectedOption(value);
    setOpen(false);
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImage = async (e) => {
    const formData = new FormData();
    formData.append("image", file);
    const a = await axios.post(
      "http://sparta.goguma.online/posts/images",
      formData
    );
    console.log(a);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const a = await axios.post("http://sparta.goguma.online/posts", {
      title: "고양이",
      content,
      img: image,
      categoryld: 0,
    });
    console.log(a);
  };
  return (
    <Main>
      <Stdiv>
        <h1>글 작성 페이지</h1>
        <Stform onSubmit={onSubmit}>
          <StDropDownContainer>
            <StDropDownHeader onClick={selectMenu}>
              {selectedOption || "Menu"}
            </StDropDownHeader>
            {Open && (
              <StDropDownListContainer>
                <StDropDownList>
                  {options.map((option, i) => (
                    <StListItem
                      key={`options_${i}`}
                      onClick={() => onOptionClicked(option)}
                    >
                      {option}
                    </StListItem>
                  ))}
                </StDropDownList>
              </StDropDownListContainer>
            )}
          </StDropDownContainer>
          <StyledInput
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
          />
          <Upload htmlFor="file">파일 업로드</Upload>{" "}
          <div>
            <StyledInput
              type="file"
              id="file"
              onChange={handleImage}
              style={{ display: "none" }}
            />
            <StyledImage src={image} />
          </div>
          <StyledButton>추가하기</StyledButton>
        </Stform>
      </Stdiv>
    </Main>
  );
};

export default Detail2;

const Stform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Stdiv = styled.div`
  width: 700px;
  height: 700px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  border: 3px solid #34495e;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StHead = styled.h1`
  color: #34495e;
  margin: 100px;
  font-size: 40px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 7px;
`;

const Upload = styled.label`
  padding: 6px 25px;
  background-color: #34495e;
  border-radius: 4px;
  color: white;
  width: 80px;
  cursor: pointer;
  &:hover {
    background-color: #2c3e50;
  }
`;

const StDropDownContainer = styled.div`
  width: 150px;
  margin: 0 auto;
`;

const StDropDownHeader = styled.div`
  margin-bottom: 5px;
  padding: 4px 1px 4px 1px;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 20px;
  color: #3faffa;
  border-radius: 15px;
`;

const StDropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 150px;
`;

const StDropDownList = styled.div`
  padding: 10px 0 0 0;
  background: #ffffff;
  border: 2px solid powderblue;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 20px;
  font-weight: 500;
`;

const StListItem = styled.div`
  margin: 8px;
  cursor: pointer;
`;

