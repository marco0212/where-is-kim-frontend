import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaCommentDots,
  FaUser,
} from "react-icons/fa";
import FormField from "../FormField";
import styled from "styled-components";
import moment from "moment";

export default function ThreadItem({
  username,
  profile,
  text,
  createdAt,
  likes,
  comments,
  userId,
}) {
  const [showComment, setShowComment] = useState(false);
  const comment = useInput("");
  const toggleShowComment = () => setShowComment(!showComment);

  return (
    <Wrapper>
      <ThreadItemTop>
        <ImageWrap>
          {profile ? <img src={profile} alt={username} /> : <FaUser />}
        </ImageWrap>
        <div>
          <strong>{username}</strong>
          <p>{text}</p>
          <span>{moment(createdAt).fromNow()}</span>
        </div>
      </ThreadItemTop>
      <ThreadItemBottom>
        <li>
          <ThreadButtonWrap>
            {likes.filter((id) => id === userId).length ? (
              <FaThumbsUp />
            ) : (
              <FaRegThumbsUp />
            )}
            {likes.length}
          </ThreadButtonWrap>
        </li>
        <li>
          <ThreadButtonWrap onClick={toggleShowComment}>
            <FaCommentDots />
            {comments.length}
          </ThreadButtonWrap>
        </li>
      </ThreadItemBottom>
      {showComment ? (
        <div>
          <CommentInput
            type="text"
            controller={comment}
            placeholder="댓글을 입력하세요."
          />
        </div>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }
  & p {
    font-size: 14px;
    margin-bottom: 5px;
    color: #666;
  }
  & span {
    font-size: 14px;
    color: #666;
  }
`;
const ThreadItemBottom = styled.ul`
  display: flex;
  & li {
    margin-right: 15px;
  }
  & + div {
    margin-top: 15px;
  }
`;
const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
  background-color: #eee;
  & img {
    width: 100%;
  }
  & svg {
    font-size: 30px;
    color: #666;
  }
  & + div {
    flex: 1;
  }
`;
const ThreadButtonWrap = styled.button`
  vertical-align: top;
  border: 1px solid #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  color: #666;
  & svg {
    font-size: 20px;
    margin-right: 10px;
    color: #8a5c8c;
  }
`;
const CommentInput = styled(FormField)`
  margin-top: 15px;
  font-size: 14px;
`;
