import React from 'react';
import InformComponent from '../../components/InformComponent';
import { User } from '../../components/types';
import Paginate from '../RepoList/Paginate';
import UserData from '../UserData/UserData';

import './searchResult.css';

export default function SearchResult(prop: { user: User }): JSX.Element {
  const { user } = prop;
  if (user.message) {
    return <InformComponent error={user.message} />;
  }
  return (
    <section className="resultContainer">
      <UserData userData={user} />
      <Paginate repoCount={user.public_repos} userName={user.login} perPage={4} />
    </section>
  );
}
