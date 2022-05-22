import React from 'react';
import { data } from '../assets/data';
import EmptySVG from '../assets/EmptySVG';

export default function EmptyRepos(): JSX.Element {
  const staticData = data;

  return (
    <div className="emptyContent">
      <EmptySVG />
      <h2 className="informTitle">{staticData.repositoryEmpty}</h2>
    </div>
  );
}
