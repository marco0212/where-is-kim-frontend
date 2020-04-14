import React from "react";
import ThreadItem from "../ThreadItem/ThreadItem";

export default function ThreadList({ threads }) {
  console.log(threads);
  return (
    <div>
      {threads.map((thread) => {
        console.log(thread);
        const {
          id,
          createdBy: { username, profile },
          text,
          createdAt,
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
