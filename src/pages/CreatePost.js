import React from "react";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addPosts } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    contents: "",
  });
  const [image, setImage] = useState("");

  const seletMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const selectMenuOne = () => {
    setDropdownOpen(false);
  };
  const selectMenuTwo = () => {
    setDropdownOpen(false);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (input.title.length < 1 || input.title.length > 50) {
    //   return alert("제목은 1~50자 이내로 😁");
    // }
    dispatch(
      __addPosts({
        id: "",
        //카탈로그 업로드
        title: input.title,
        contents: input.contents,
        // 사진 업로드
      })
    );

    // navigate("/");
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    axios.post("url", formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <StDialog>
      <form onSubmit={onSubmitHandler}>
        <Dropdown />
        <StPost>CreatePost </StPost>
        <StCateg>Category : </StCateg>
        <StfullDropdown>
          <button onClick={seletMenu}>
            {dropdownOpen ? (
              <Dropdown visibility={dropdownOpen}>
                <StMenu>
                  <StBut onClick={(e) => selectMenuOne}> 한식 </StBut>
                  <StBut onClick={(e) => selectMenuTwo}> 중식 </StBut>
                </StMenu>
              </Dropdown>
            ) : null}
            {dropdownOpen ? "Close" : "메뉴를 골라보자"}
          </button>
        </StfullDropdown>

        <StTitle
          type="text"
          name="title"
          value={input.title}
          onChange={onChangeHandler}
        >
          Title :
          <input />
        </StTitle>
        <StContents
          type="text"
          name="contents"
          value={input.contents}
          onChange={onChangeHandler}
        >
          Contents :
          <input />
        </StContents>

        <div>
          <input
            type="file"
            name="file"
            accept="image/png"
            onChange={handleImage}
          />
          <br />

          <StButtonGroup>
            <StButton
              borderColor="black"
              width="70px"
              height="50px"
              onClick={() => navigate("/")}
            >
              Previous
            </StButton>

            <StButton
              borderColor="black"
              width="70px"
              height="50px"
              type="submit"
              onChange={handleUpload}
            >
              Upload
            </StButton>
          </StButtonGroup>
        </div>
      </form>
    </StDialog>
  );
};

export default CreatePost;

const StDialog = styled.div`
  border: 5px solid teal;
  border-radius: 20px;
  padding: 12px 24px 24px 24px;
  width: 60%;
  height: 600px;
  margin: 130px auto 0px auto;
  text-align: center;
  list-style: none;
`;

const StPost = styled.div`
  font-size: 50px;
`;

const StCateg = styled.div`
  font-size: 25px;
  margin: 20px;
`;

const StTitle = styled.div`
  font-size: 20px;
  margin: 20px;
`;

const StContents = styled.div`
  font-size: 20px;
  margin: 20px;
`;

const StfullDropdown = styled.div`
  position: relative;
`;

const StMenu = styled.div`
  position: absolute;

  margin: 25px 0;
  padding: 0;

  width: 150px;
`;

const StBut = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;

  background: powderblue;
  color: blue;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  font: inherit;
  cursor: pointer;
`;

const StButtonGroup = styled.div`
  width: 58%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  margin: 20px;
`;

const StButton = styled.button`
  border: 2px solid blue;
  font-size: 13px;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;
