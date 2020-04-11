import io from "socket.io-client";

export const socket = io.connect("http://localhost:4000");

export function emitJoinTeam(username, teamName) {
  socket.emit("join team", username, teamName);
}
