/* eslint-disable react/prop-types */
import React from 'react';

const ReferendumContestCard = ({ contest }) => (
  <div className="group flex-shrink-0 flex-grow self-stretch shadow-md rounded-md pt-4 hover:bg-purple-500 hover:shadow-lg active:bg-purple-700 transition cursor-pointer flex flex-col">
    <h1 className="text-lg font-bold px-4 group-hover:text-white">{contest.referendumTitle}</h1>
    <div className="px-4 pb-4 group-hover:text-white">
      <div>{contest.referendumSubtitle}</div>
      <div>-&gt;</div>
    </div>
    <div className="mt-auto px-4 py-2 bg-gray-200 rounded-b-md group-hover:bg-gray-600 group-hover:text-white">
      {`(i) Source: ${contest.sources[0].name}, ${contest.sources[0].official ? 'Offical' : 'Unofficial'}`}
    </div>
  </div>
);

export default ReferendumContestCard;
