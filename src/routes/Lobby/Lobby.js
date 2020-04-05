import React from 'react';
import LoginForm from '../../components/Form/LoginForm';
import TeamList from '../../components/TeamList/TeamList';

export default function Lobby({
  isLogin,
  teams,
  getToken
}) {
  return (
    <div>
      <h1>Title</h1>
      <p>Your component is responsible for both fetching data and presenting it. There’s nothing “wrong” with this but you miss out on a few benefits of React.
      Reusability
      CommentList can’t be reused unless under the exact same circumstances.
      Data structure
      Your markup components should state expectations of the data they require. PropTypes are great for this.
      Our component is opinionated about data structure but has no way of expressing those opinions. This component will break silently if the json endpoint change.</p>
      <div>
        {
          isLogin ? (
            <TeamList teams={teams} />
          ) : (
            <LoginForm getToken={getToken} />
          )
        }
      </div>
    </div>
  );
}
