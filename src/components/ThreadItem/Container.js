import React, { useState } from "react";
import { connect } from "react-redux";
import ThreadItem from "./ThreadItem";
import useInput from "../../hooks/useInput";
import { toggleLikeAPI } from "../../api";
import { updateThreadLikes } from "../../actions";

function ThreadItemContainer({
  id,
  username,
  profile,
  text,
  createdAt,
  likes,
  comments,
  userId,
  updateThreadLikes,
}) {
  const [showComment, setShowComment] = useState(false);
  const comment = useInput("");
  const toggleShowComment = () => setShowComment(!showComment);
  const threadLike = async () => {
    const response = await toggleLikeAPI(id, userId);
    const {
      result: { likes },
    } = await response.json();
    updateThreadLikes(id, likes);
  };
  return (
    <ThreadItem
      username={username}
      profile={profile}
      text={text}
      createdAt={createdAt}
      likes={likes}
      comment={comment}
      comments={comments}
      showComment={showComment}
      onCommentClick={toggleShowComment}
      onLikeClick={threadLike}
      userId={userId}
    />
  );
}
const mapStateToProps = (state) => ({
  userId: state.user.id,
});
const mapDispatchToProps = (dispatch) => ({
  updateThreadLikes: (id, likes) => dispatch(updateThreadLikes(id, likes)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadItemContainer);
