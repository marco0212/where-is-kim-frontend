import React from "react";
import styled from "styled-components";
import moment from "moment";
import ThreadItem from "../ThreadItem/ThreadItem";

export default function ThreadList({ thread, userId }) {
  const { date, items } = thread;
  const displyaDate =
    moment().format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")
      ? "Today"
      : moment(date).format("dddd, MMMM Do YYYY");
  return (
    <>
      <ThreadDivider>
        <span>{displyaDate}</span>
      </ThreadDivider>
      {items.map((thread) => {
        const {
          _id: id,
          created_by: { username },
          text,
          created_at: createdAt,
          likes,
          comments,
        } = thread;
        return (
          <ThreadItem
            key={id}
            userId={userId}
            username={username}
            text={text}
            createdAt={createdAt}
            likes={likes}
            comments={comments}
          />
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
