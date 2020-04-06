import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  height: 100%;
`;
export const Row = styled.div`
  display: flex;
  margin: 0 -15px;
  & > div {
    flex: 1;
    padding: 0 15px;
  }
`;
