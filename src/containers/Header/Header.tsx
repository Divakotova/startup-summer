import React from 'react';
import GithubSVG from '../../assets/GithubSVG';
import SearchInput from '../../components/SearchInput';
import { ContentState } from '../../components/types';

import './header.css';

export default function Header(prop: ContentState): JSX.Element {
  const { onValueChange } = prop;

  return (
    <header className="header">
      <div className="headerWrapper">
        <GithubSVG />
        <SearchInput onValueChange={onValueChange} />
      </div>
    </header>
  );
}
