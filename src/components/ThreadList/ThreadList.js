import React from "react";
import styled from "styled-components";
import moment from "moment";
export default function ThreadList({ thread }) {
  const { date, items } = thread;
  return (
    <>
      <ThreadDivider>
        <span>{moment(date).format("dddd, MMMM Do YYYY")}</span>
      </ThreadDivider>
      {items.map((thread) => {
        const { createdBy, text, createdAt, likes, comments } = thread;
        return (
          <ThreadItem>
            <ThreadItemTop>
              <ImageWrap>
                <img
                  src="https://dummyimage.com/600x600/000/fff"
                  alt={createdBy}
                />
              </ImageWrap>
              <div>
                <strong>{createdBy}</strong>
                <p>{text}</p>
                <span>{moment(createdAt).fromNow()}</span>
              </div>
            </ThreadItemTop>
            <ThreadItemBottom>
              <li>
                <button>좋아요</button>
                <button>코멘트</button>
              </li>
            </ThreadItemBottom>
          </ThreadItem>
        );
      })}
    </>
  );
}

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
