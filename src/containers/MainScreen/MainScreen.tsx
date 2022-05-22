import React, { useState, useEffect } from 'react';
import { SearchValue, User } from '../../components/types';

import './mainScreen.css';

import InformComponent from '../../components/InformComponent';
import SearchResult from '../SearchResult/SearchResult';
import { defaultUser } from '../../assets/data';
import Loading from '../../components/Loading';

export default function MainScreen(prop: SearchValue): JSX.Element {
  const { value } = prop;
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchUser, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    setIsLoaded(false);
    if (value === '') {
      setUser({ ...searchUser, message: '' });
    } else {
      fetch(`https://api.github.com/users/${value}`)
        .then((res) => res.json())
        .then((results) => {
          setIsLoaded(true);
          setUser(results);
        });
    }
  }, [prop]);

  let render;
  if (value) {
    render = isLoaded ? <SearchResult user={searchUser} /> : <Loading />;
  } else {
    render = <InformComponent />;
  }

  return <main className="mainContainer">{render}</main>;
}
