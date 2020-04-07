import React, { useEffect, useState } from "react";
import { verifyAPI } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonWrap } from "../components/LoginForm/LoginForm";

export default function Confirm({
  match: {
    params: { token },
  },
}) {
  const [isPending, setIsPending] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function verifyUser() {
      const response = await verifyAPI(token);
      const { result } = await response.json();

      setIsPending(false);

      if (result === "ok") {
        setMessage("인증되었습니다.");
      } else {
        setMessage("잘못된 토큰 혹은 서버 장애입니다.");
      }
    }
    verifyUser();
  }, [token]);
  return (
    <Wrapper>
      <Box>
        <h3>{isPending ? "Loading" : message}</h3>
        <ConfirmButtonWrap>
          <Link to="/">Home</Link>
        </ConfirmButtonWrap>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;
const Box = styled.div`
  align-self: center;
  text-align: center;
  border: 1px solid #eee;
  width: 100%;
  max-width: 50%;
  padding: 40px;
`;
const ConfirmButtonWrap = styled(ButtonWrap)`
  justify-content: center;
`;
