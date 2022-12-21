import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  __createGet,
  __deletePost,
  __editPost,
} from "../redux/modules/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";
import HeartButton from "./HeartButton";

const DetailCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post } = useSelector((state) => state.post);

  const [editOn, setEditOn] = useState("");
  const [input, setInput] = useState("");

  const onEditComplete = () => {
    dispatch(__editPost());
    setEditOn("");
  };

  const DeleteButton = () => {
    dispatch(__deletePost(47));
  };

  useEffect(() => {
    dispatch(__createGet());
  }, []);

  return "47" === editOn ? (
    <>
      <div>
        <div>
          <DetailButtonTop onClick={() => navigate("/main")}>
            back
          </DetailButtonTop>
          <DetailButtonTop2 onClick={() => navigate("/log")}>
            signin
          </DetailButtonTop2>
        </div>
        <DetailCardWrapper>
          <DetailNicknameCarrier>
            <div> nickname </div>
            <div> {post?.postId} </div>
          </DetailNicknameCarrier>

          <DetailImageCarrier alt="" />

          <HeartButton />

          <DetailTitleCarrier
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <DetailContentCarrier
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </DetailCardWrapper>
        <div>
          <DetailButtonEdit onClick={() => onEditComplete(47)}>
            {" "}
            completion{" "}
          </DetailButtonEdit>
          <DetailButtonDEL onClick={() => setEditOn("")}>
            {" "}
            Cancel{" "}
          </DetailButtonDEL>
        </div>
      </div>
      <Comment />
    </>
  ) : (
    <>
      <div>
        <div>
          <DetailButtonTop onClick={() => navigate("/main")}>
            back
          </DetailButtonTop>
          <DetailButtonTop2 onClick={() => navigate("/log")}>
            signin
          </DetailButtonTop2>
        </div>
        <DetailCardWrapper>
          <DetailNicknameCarrier>
            <div> nickname </div>
            <div> {post?.postId} </div>
          </DetailNicknameCarrier>

          <DetailImageCarrier alt="" />

          <HeartButton />

          <DetailTitleCarrier
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <DetailContentCarrier
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </DetailCardWrapper>
        <div>
          <DetailButtonEdit
            onClick={() => {
              setEditOn();
              setInput();
            }}
          >
            {" "}
            Edit{" "}
          </DetailButtonEdit>
          <DetailButtonDEL onClick={() => DeleteButton()}>
            {" "}
            Delete{" "}
          </DetailButtonDEL>
        </div>
      </div>
      <Comment />
    </>
  );
};

//
//         return edit === editOn ? (
//           <div>
//             <DetailCardWrapper>
//               <DetailNicknameCarrier> {nickname} </DetailNicknameCarrier>
//               <DetailImageCarrier alt="" />
//               <DetailTitleCarrier
//                 onChange={(e) => setInput(e.target.value)}
//                 value={input}
//               />
//               <DetailContentCarrier> {post.content} </DetailContentCarrier>
//             </DetailCardWrapper>
//             <div>
//               <DetailButtonEdit onClick={() => onEditComplete(edit)}>
//                 completion
//               </DetailButtonEdit>
//               <DetailButtonDEL onClick={() => setEditOn("")}>
//                 Cancel
//               </DetailButtonDEL>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <DetailCardWrapper>
//               <DetailNicknameCarrier> {nickname} </DetailNicknameCarrier>
//               <DetailImageCarrier alt="" />
//               <DetailTitleCarrier> {post.title} </DetailTitleCarrier>
//               <DetailContentCarrier> {post.content} </DetailContentCarrier>
//             </DetailCardWrapper>
//             <div>
//               <DetailButtonEdit //아이디 에딧온으로 바꾸고 input이라는 스테이트에 코멘트값 넣기
//                 onClick={() => {
//                   setEditOn(edit.id);
//                   setInput(edit.post);
//                 }}
//               >
//                 Edit
//               </DetailButtonEdit>
//               <DetailButtonDEL onClick={() => DeleteButton(post.id)}>
//                 Delete
//               </DetailButtonDEL>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </>
// );
// };

const DetailCardWrapper = styled.div`
  width: 600px;
  height: 550px;
  border: 1px solid black;
  border-radius: 14px;
  margin: 100px 0 0 35px;
`;
const DetailNicknameCarrier = styled.div`
  display: flex;
  width: 600px;
  height: 40px;
  border: 0px solid black;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  justify-content: space-between;
`;
const DetailImageCarrier = styled.img`
  width: 600px;
  height: 300px;
  border: 0px solid black;
`;
const DetailTitleCarrier = styled.span`
  width: 600px;
  height: 50px;
  font-size: 30px;
  font-style: bold;
`;
const DetailContentCarrier = styled.div`
  width: 600px;
  height: 170px;
  border: 0.5px;
  min-height: max-content;
`;

const DetailButtonTop = styled.div`
  margin: 10px 0 0 -140px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;
const DetailButtonTop2 = styled.div`
  margin: 10px 0 0 760px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;

const DetailButtonDEL = styled.div`
  margin: 10px 0 0 260px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;
const DetailButtonEdit = styled.div`
  margin: 10px 0 0 340px;
  position: absolute;
  font-size: 20px;
  border-radius: 12px;
  :hover {
    border: 1px solid black;
  }
`;

export default DetailCard;
