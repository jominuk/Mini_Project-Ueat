import React from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
// import { __deletePost, __editPost } from "../redux/modules/postSlice";
// import { useDispatch } from "react-redux";

const DetailCard = () => {
  // const dispatch = useDispatch();

  // const post = useSelector((state) => state.post.post);

  // const [editOn, setEditOn] = useState("");
  // // edit.id랑 비교 후 input창 바꾸기(수정버튼 클릭 시 editOn으로 들어옴)
  // const [input, setInput] = useState("");

  // //수정완료버튼
  // const onEditComplete = (editID) => {
  //   dispatch(__patchComment({ id: editID, title, content: input }));
  //   setEditOn("");
  // };

  // const DeleteButton = () => {
  //   dispatch(__deletePost(id));
  //   dispatch(__editPost(id));
  // };

  return (
    <>
      <div>
        <div>
          <DetailButtonTop>back</DetailButtonTop>
          <DetailButtonTop2>signin</DetailButtonTop2>
        </div>
        <DetailCardWrapper>
          <DetailNicknameCarrier>nickname</DetailNicknameCarrier>
          <DetailImageCarrier alt="" />
          <DetailTitleCarrier>Title</DetailTitleCarrier>
          <DetailContentCarrier>content</DetailContentCarrier>
        </DetailCardWrapper>
        <div>
          <DetailButtonEdit>Edit</DetailButtonEdit>
          <DetailButtonDEL>Delete</DetailButtonDEL>
        </div>
      </div>
    </>
  );
};

// return (
//   <>
//     <div>
//       <DetailButtonTop>back</DetailButtonTop>
//       <DetailButtonTop2>signin</DetailButtonTop2>
//     </div>
//     <div>
//       {post.map((edit) => {
//         // editOn 아이디랑 비교해서 일치하는 3항 연산자로 인풋창 바꾸기
//         return edit.id === editOn ? (
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
//               <DetailButtonEdit onClick={() => onEditComplete(el.id)}>
//                 {" "}
//                 completion{" "}
//               </DetailButtonEdit>
//               {/* 새롭게 만들어 일치하는 post id가 없게 만들기 */}
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
  width: 600px;
  height: 40px;
  border: 0px solid black;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
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
