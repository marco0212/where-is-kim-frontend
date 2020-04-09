import React from "react";
import ThreadList from "../components/ThreadList/ThreadList";

export default function Threads({ threads }) {
  return threads.map((thread) => <ThreadList thread={thread} />);
}
