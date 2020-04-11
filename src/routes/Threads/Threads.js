import React from "react";
import ThreadList from "../../components/ThreadList/ThreadList";

export default function Threads({ threads, userId }) {
  return threads.map((thread) => (
    <ThreadList key={thread.date} thread={thread} userId={userId} />
  ));
}
