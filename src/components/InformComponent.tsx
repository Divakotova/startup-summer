import React from 'react';
import UserSVG from '../assets/UserSVG';
import SearchBig from '../assets/SearchBig';
import { data } from '../assets/data';

export default function InformComponent(prop: { error?: string }): JSX.Element {
  const { error } = prop;
  const staticData = data;

  let content;
  if (error) {
    content = (
      <>
        <UserSVG />
        <h2 className="informTitle">{staticData.notFoundTitle}</h2>
      </>
    );
  } else {
    content = (
      <>
        <SearchBig />
        <h2 className="informTitle">{staticData.initialSearchTitle}</h2>
      </>
    );
  }

  return (
    <section className="informContainer">
      <div className="informContent">{content}</div>
    </section>
  );
}
