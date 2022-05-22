import React from 'react';
import SearchSmall from '../assets/SearchSmall';
import { ContentState } from './types';

import { data } from '../assets/data';

export default function SearchInput(prop: ContentState): JSX.Element {
  const { onValueChange } = prop;
  const { placeholder } = data;

  const handleChange = (e: any): void => {
    onValueChange(e);
  };

  return (
    <form action="" method="get" className="searchSVG">
      <SearchSmall />
      <input onKeyDown={handleChange} type="search" className="searchInput" placeholder={placeholder} />
    </form>
  );
}
