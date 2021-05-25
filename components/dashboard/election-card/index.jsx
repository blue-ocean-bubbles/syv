/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { DateTime } from 'luxon';

import ContestsContainer from './contests-container';

export default function ElectionCard({ election }) {
  const getDateObjects = () => {
    const date = DateTime.fromISO(election.election.electionDay);

    return (
      <>
        <span className="text-2xl text-gray-900 font-bold">{date.toLocaleString({ day: '2-digit' })}</span>
        <span className="text-lg bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-indigo-600 font-black uppercase">{date.toLocaleString({ month: 'short' })}</span>
      </>
    );
  };

  return (
    <div>
      <div className="m-4 flex gap-x-4">
        <div className="bg-gray-200 inline-flex flex-col items-center py-3 px-5 rounded-xl shadow-sm">
          {getDateObjects()}
        </div>
        <span>
          <div className="text-gray-900 text-2xl font-bold align-middle">{election.election.name}</div>
          <div className="text-gray-900 text-lg font-light italic">
            {`${election.state[0].local_jurisdiction.name}, ${election.state[0].name}`}
          </div>
        </span>
        <button className="justify-self-end self-center ml-auto btn btn-blue">
          Vote Here &gt;
        </button>
      </div>
      <div className="m-4">
        <ContestsContainer contests={election.contests} />
        <div>Polling Locations</div>
      </div>
    </div>
  );
}
