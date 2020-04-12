import io from "socket.io-client";

export const socket = io.connect("http://localhost:4000");

export function emitJoinTeam(username, teamName) {
  socket.emit("join team", username, teamName);
}

export function emitLeaveTeam() {
  socket.emit("leave team");
}

export function emitAddThread() {
  socket.emit("add thread");
}