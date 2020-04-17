import io from "socket.io-client";

export const socket = io.connect("http://api.where-is-kim.site");

export function emitJoinTeam(username, teamName) {
  socket.emit("join team", username, teamName);
}

export function emitLeaveTeam() {
  socket.emit("leave team");
}

export function emitAddThread() {
  socket.emit("add thread");
}
