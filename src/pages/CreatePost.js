import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../components/Button";
import { StyledImage } from "../components/Image";
import { StyledInput } from "../components/Input";
import { __createPost } from "../redux/modules/postSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { login } = useSelector((state) => state.user);

  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [Open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // useEffect(() => {
  //   if (!login) {
  //     navigate("/log");
  //   }
  // }, []);

  const selectMenu = () => setOpen(!Open);
  const options = ["한식", "중식", "일식", "양식", "기타"];

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setOpen(false);
  };

  //파일업로드
  const handleImage = async (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("categoryId", options.indexOf(selectedOption));
    for (let key of formData.keys()) {
    }
    const a = dispatch(__createPost(formData));
    if (a.payload.message === "작성 완료") {
      alert("작성 완료");
      navigate("/main/0");
    }
  };

  return (
    <Main>
      <Stdiv>
        <h1>글 작성 페이지</h1>
        <Stform onSubmit={onSubmit}>
          <StDropDownContainer>
            <StDropDownHeader onClick={selectMenu}>
              {selectedOption || "메뉴선택"}
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
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="내용"
            onChange={(e) => setContent(e.target.value)}
          />
          <Upload htmlFor="file">파일 업로드</Upload>
          <div>
            <StyledInput
              type="file"
              id="file"
              onChange={handleImage}
              style={{ display: "none" }}
            />
            <StyledImage src={preview} />
          </div>
          <StButtonGroup>
            <StyledButton
              onClick={() => {
                navigate("/main/0");
              }}
            >
              홈으로
            </StyledButton>

            <StyledButton> 추가하기 </StyledButton>
          </StButtonGroup>
        </Stform>
      </Stdiv>
    </Main>
  );
};

export default CreatePost;

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

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Upload = styled.label`
  padding: 6px 25px;
  background-color: #34495e;
  border-radius: 4px;
  color: white;
  width: 100px;
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
  font-weight: 500;
  font-size: 20px;
  color: #34495e;
  border-radius: 3px;
  border: 2px solid #34495e;
  cursor: pointer;
`;

const StDropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 150px;
`;

const StDropDownList = styled.div`
  padding: 10px 0 0 0;
  background: #ffffff;
  border: 2px solid gray;
  border-radius: 15px;
  box-sizing: border-box;
  color: #34495e;
  font-size: 20px;
  font-weight: 500;
`;

const StListItem = styled.div`
  margin: 8px;
  cursor: pointer;
`;

const StButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 30px;
`;
