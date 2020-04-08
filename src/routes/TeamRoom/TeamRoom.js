import React from "react";
import styled from "styled-components";

export default function TeamRoom() {
  return (
    <Wrapper>
      <Aside>
        <LogoWrap>
          <ImageWrap>
            <img src="https://dummyimage.com/600x600/000/fff" alt="team name" />
          </ImageWrap>
          <h3>Team name</h3>
        </LogoWrap>
        <UserList>
          <li>
            <strong>Team mate 1</strong>
          </li>
          <li>
            <strong>Team mate 2</strong>
          </li>
          <li>
            <strong>Team mate 3</strong>
          </li>
        </UserList>
      </Aside>
      <Main>
        <MainHeader>
          <h4>Threads</h4>
          <button>BAR</button>
        </MainHeader>
        <ThreadList>
          <ThreadDivider>
            <span>Monday, April 6th</span>
          </ThreadDivider>
          <ThreadItem>
            <ThreadItemTop>
              <ImageWrap>
                <img
                  src="https://dummyimage.com/600x600/000/fff"
                  alt="team name"
                />
              </ImageWrap>
              <div>
                <strong>Jeong</strong>
                <p>Jeong이 출근했습니다.</p>
                <span>5분 전</span>
              </div>
            </ThreadItemTop>
            <ThreadItemBottom>
              <li>
                <button>좋아요</button>
                <button>코멘트</button>
              </li>
            </ThreadItemBottom>
          </ThreadItem>
        </ThreadList>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;
const Aside = styled.aside`
  display: flex;
  width: 260px;
  position: fixed;
  top: 0;
  bottom: 0;
  flex-direction: column;
  padding: 30px 0 30px 30px;
  background-color: #3f0e40;
  color: #f1f1f1;
`;
const Main = styled.main`
  margin-left: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MainHeader = styled.header`
  display: flex;
  padding: 15px 30px;
  justify-content: space-between;
  aling-items: center;
  border-bottom: 1px solid #eee;
  & h4 {
    font-size: 24px;
    font-weight: bold;
  }
`;
const ThreadList = styled.div`
  flex: 1;
  padding-bottom: 30px;
  overflow-y: scroll;
`;
const ThreadDivider = styled.div`
  position: relative;
  background-color: #fff;
  padding: 10px 0 10px 30px;
  & span {
    font-size: 16px;
    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 0 10px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #eee;
  }
`;
const ThreadItem = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin: 0 30px 21px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ThreadItemTop = styled.div`
  display: flex;
  margin-bottom: 10px;
  & strong {
    font-size: 16px;
    margin-bottom: 5px;
  }
  & p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & span {
    font-size: 14px;
  }
`;
const ThreadItemBottom = styled.ul`
  display: flex;
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h3 {
    margin-bottom: 0;
  }
`;
const ImageWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
  & img {
    width: 100%;
  }
`;
const UserList = styled.ul`
  & li {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.6;
    &:before {
      content: "";
      display: inline-block;
      margin-right: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
  }
`;
