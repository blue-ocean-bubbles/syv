/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import cdcl from '../../../utils/conditional-classes';

const informationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const ReferendumContestCard = ({ contest }) => (
  <div className="group flex-shrink-0 flex-grow self-stretch shadow-md rounded-md pt-4 hover:shadow-lg transition flex flex-col">
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-lg font-bold px-4">{contest.referendumTitle}</h1>
      <a target="_blank" href={contest.referendumUrl} className="btn-rounded btn-rounded-gray mr-4 flex flex-row gap-2 items-center" rel="noreferrer">
        More Information
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
    </div>
    <div className="p-4">
      {contest.referendumSubtitle}
    </div>
    <div className="mt-auto px-4 py-2 bg-gray-200 rounded-b-md group-hover:bg-gray-600 group-hover:text-white flex flex-row items-center gap-2 justify-center">
      {informationIcon}
      {`Source: ${contest.sources[0].name}, ${cdcl(contest.sources[0].official, 'Offical', 'Unofficial')}`}
    </div>
  </div>
);

export default ReferendumContestCard;
