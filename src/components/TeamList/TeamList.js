import React from 'react';

export default function TeamList({ teams }) {
  return (
    <ul>
      {
        teams.length ? (
          teams.map(team => {
            return <li>team</li>;
          })
        ) : (
          <li>There is no team</li>
        )
      }
    </ul>
  );
}