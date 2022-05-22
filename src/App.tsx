import React, { useState } from 'react';
import MainScreen from './containers/MainScreen/MainScreen';
import Header from './containers/Header/Header';

import './reset.css';

function App(): JSX.Element {
  const [searchValue, setValue] = useState('');

  const searchGitHubUser = (e: any): void => {
    const { value } = e.target as HTMLInputElement;
    if (e.nativeEvent.key === 'Enter') {
      e.preventDefault();
      setValue(value);
    }
  };

  return (
    <>
      <Header onValueChange={searchGitHubUser} />
      <MainScreen value={searchValue} />
    </>
  );
}

export default App;
