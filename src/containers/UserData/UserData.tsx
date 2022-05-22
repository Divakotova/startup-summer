import React from 'react';
import { User } from '../../components/types';
import UserStatistic from '../../components/UserStatistic';

import './userData.css';

export default function UserData(prop: { userData: User }): JSX.Element {
  const { userData } = prop;

  return (
    <section className="userData">
      <img className="userAvatar" src={userData.avatar_url} alt="Avatar" />
      <h2 className="userName">{userData.name}</h2>
      <a href={userData.html_url} target="_blank" rel="noreferrer">
        {userData.login}
      </a>
      <UserStatistic followings={userData.following} followers={userData.followers} />
    </section>
  );
}
