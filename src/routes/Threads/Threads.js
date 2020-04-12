import React from "react";
import ThreadListWithDivider from "../../components/ThreadListWithDivider/ThreadListWithDivider";
import styled from "styled-components";
import { FaSync } from "react-icons/fa";

export default function Threads({ threads, userId }) {
  return (
    <Wrapper>
      {threads.map((thread) => (
        <ThreadListWithDivider key={thread.date} thread={thread} />
      ))}
      <Button>
        <FaSync />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
const Button = styled.button`
  border: 0;
  background: #e91e44;
  position: fixed;
  right: 60px;
  bottom: 40px;
  font-size: 35px;
  color: #fff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;
