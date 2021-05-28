/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react';
import cdcl from '../../../utils/conditional-classes';

const informationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const GeneralContestCard = ({ contest, onClick }) => (
  <div role="button" tabIndex={-2} className="group flex-shrink-0 flex-grow self-stretch shadow-md rounded-md pt-4 hover:bg-indigo-500 hover:shadow-lg active:bg-indigo-700 transition cursor-pointer flex flex-col" onClick={onClick}>
    <h1 className="text-lg font-bold px-4 group-hover:text-white pointer-events-none">{contest.office}</h1>
    <div className="px-4 pb-4 group-hover:text-white pointer-events-none">
      <div>
        {contest.candidates.map((candidate) => (
          <div key={candidate.name}>
            <span className="font-bold">{candidate.name}</span>
            <span>, </span>
            <span className="italic">{candidate.party}</span>
          </div>
        ))}
      </div>
    </div>
    <div id={`info-${contest.office}`} className="mt-auto transition px-4 py-2 bg-gray-200 rounded-b-md group-hover:bg-gray-600 group-hover:text-white flex flex-row items-center gap-2 justify-center">
      {informationIcon}
      {`Source: ${contest.sources[0].name}, ${cdcl(contest.sources[0].official, 'Offical', 'Unofficial')}`}
    </div>
  </div>
);

export default GeneralContestCard;
