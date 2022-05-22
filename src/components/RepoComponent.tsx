import React from 'react';

import { UserRepo } from './types';

export default function RepoComponent(prop: { data: UserRepo }): JSX.Element {
  const { data } = prop;
  return (
    <div className="repoContainer">
      <div className="repoContent">
        <a className="repoTitle" href={data.html_url} target="_blank" rel="noreferrer">
          {data.name}
        </a>
        <p className="repoDescription">{data.description}</p>
      </div>
    </div>
  );
}
