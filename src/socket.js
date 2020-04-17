import io from "socket.io-client";

export const socket = io.connect(
  "http://whereiskim-env-1.eba-exaiyet6.ap-northeast-2.elasticbeanstalk.com"
);

export function emitJoinTeam(username, teamName) {
  socket.emit("join team", username, teamName);
}

export function emitLeaveTeam() {
  socket.emit("leave team");
}

export function emitAddThread() {
  socket.emit("add thread");
}
