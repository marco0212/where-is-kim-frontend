import React from "react";
import ThreadItem from "../ThreadItem/ThreadItem";

export default function ThreadList({ threads }) {
  return (
    <div>
      {threads.map((thread) => {
        const {
          _id: id,
          created_by: { username, profile },
          text,
          created_at: createdAt,
          likes,
          comments,
        } = thread;

        return (
          <ThreadItem
            key={id}
            profile={profile}
            username={username}
            text={text}
            createdAt={createdAt}
            likes={likes}
            comments={comments}
          />
        );
      })}
    </div>
  );
}
