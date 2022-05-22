import React from 'react';
import FollowersSVG from '../assets/FollowersSVG';
import FollowingSVG from '../assets/FollowingSVG';

import { data } from '../assets/data';
import { StaticData } from './types';

function trackingCount(amount: number): string {
  let modifyAmount: string;
  if (amount >= 1000) {
    modifyAmount = (amount / 1000).toFixed(1);
    return `${modifyAmount}k`;
  }
  return `${amount}`;
}

export default function UserStatistic(prop: StaticData): JSX.Element {
  const { followings, followers } = prop;
  const statisticData = data;

  return (
    <div className="trackingStatistics">
      <div className="followersContainer">
        <FollowersSVG />
        <p>{`${trackingCount(followers)} ${statisticData.followers}`}</p>
      </div>
      <div className="followersContainer">
        <FollowingSVG />
        <p>{`${trackingCount(followings)} ${statisticData.followings}`}</p>
      </div>
    </div>
  );
}
