/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import cdcl from '../../../utils/conditional-classes';

import GeneralContestCard from './general-contest-card';
import ReferendumContestCard from './referendum-contest-card';

const ContestsContainer = ({ contests }) => {
  const [contestsExpanded, setContestsExpanded] = useState(false);
  const [referendumsExpanded, setReferendumsExpanded] = useState(false);

  return (
    <div>
      <div className="shadow-md">
        <div className="p-4 flex justify-between">
          <span className="text-lg">General Elections</span>
          <button className="btn-rounded btn-rounded-gray" tabIndex={-1} onClick={() => setContestsExpanded(!contestsExpanded)}>{`${contestsExpanded ? '^' : 'v'}`}</button>
        </div>
        <div className={`transition-height mx-4 flex flex-wrap justify-center items-center gap-4 overflow-hidden${cdcl(contestsExpanded, 'p-4 h-full', 'h-0')}`}>
          {contests.map((contest) => contest.type === 'General' && <GeneralContestCard contest={contest} key={contest.office} />)}
        </div>
      </div>
      <div className="shadow-md">
        <div className="p-4 flex justify-between">
          <span className="text-lg">Referendums</span>
          <button className="btn-rounded btn-rounded-gray" onClick={() => setReferendumsExpanded(!referendumsExpanded)}>{`${referendumsExpanded ? '^' : 'v'}`}</button>
        </div>
        <div className={`transition-height mx-4 flex flex-wrap justify-center items-center gap-4 overflow-hidden${cdcl(referendumsExpanded, 'p-4 h-full border-solid border-t-2 border-gray-600', 'h-0')}`}>
          {contests.map((contest) => contest.type === 'Referendum' && <ReferendumContestCard contest={contest} key={contest.referendumTitle} />)}
        </div>
      </div>
    </div>
  );
};

export default ContestsContainer;
