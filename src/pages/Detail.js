import React from "react";
import DetailCard from "../components/DetailCard";
import styled from "styled-components";

const Detail = () => {
  return (
    <>
      <DetailPageLayout>
        <DetailCard></DetailCard>
      </DetailPageLayout>
    </>
  );
};

const DetailPageLayout = styled.div`
  width: 1200px;
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Detail;
