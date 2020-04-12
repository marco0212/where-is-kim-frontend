import React from "react";
import styled from "styled-components";
import ThreadList from "../../components/ThreadList/ThreadList";

export default function Dashboard({ threads }) {
  return (
    <Wrapper>
      <StatusBox>
        <h3>총 인원</h3>
        <span>10</span>
      </StatusBox>
      <StatusBox>
        <h3>출근 완료</h3>
        <span>10</span>
      </StatusBox>
      <StatusBox>
        <h3>퇴근 완료</h3>
        <span>10</span>
      </StatusBox>
      <ThreadBox>
        <h3>Today status</h3>
        <ThreadList threads={threads} />
      </ThreadBox>
      <ElseBox>
        <h3>총 지각 비율</h3>
      </ElseBox>
      <ElseBox>
        <h3>지각 왕</h3>
      </ElseBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-template-rows: auto 1fr 1fr;
`;
const Box = styled.div`
  border: 1px solid #ebebeb;
  padding: 15px;
`;
const StatusBox = styled(Box)`
  display: flex;
  flex-direction: column;

  & strong {
    display: block;
    font-size: 20px;
    margin-bottom: 15px;
  }
  & span {
    text-align: center;
    font-size: 25px;
  }
`;
const ThreadBox = styled(Box)`
  grid-row: 1/4;
  grid-column: 4/5;
  & > div {
    padding: 15px;
    margin: 0 0 20px;
    & > div {
      margin-bottom: 0;
    }
    & > ul {
      display: none;
    }
  }
`;
const ElseBox = styled(Box)`
  grid-column: 1/4;
`;
