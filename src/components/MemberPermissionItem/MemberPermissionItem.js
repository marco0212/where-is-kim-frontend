import React from "react";

export default function MemberPermissionItem({
  id,
  username,
  isAdmin,
  onChange,
}) {
  return (
    <tr>
      <td>{username}</td>
      <td>
        <select
          defaultValue={isAdmin ? "admin" : "normal"}
          onChange={onChange.bind(null, id)}
        >
          <option value="admin">admin</option>
          <option value="normal">normal</option>
        </select>
      </td>
    </tr>
  );
}
