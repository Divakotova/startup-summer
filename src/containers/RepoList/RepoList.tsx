import React from 'react';
import { UserRepo } from '../../components/types';
import { data } from '../../assets/data';
import RepoComponent from '../../components/RepoComponent';

import './repoList.css';

export default function RepoList(prop: { repoCount: number; repoList: UserRepo[] }): JSX.Element {
  const { repoCount, repoList } = prop;
  const title = data.repositoriesTitle;

  return (
    <section className="repositories">
      <h2 className="repositoriesTitle">{`${title} (${repoCount})`}</h2>
      <div className="repositoriesList">
        {repoList.map((repo) => (
          <RepoComponent data={repo} key={repo.id} />
        ))}
      </div>
    </section>
  );
}
