import React from 'react';
import Dashboard from '../../components/dashboard';
import dummyData from './ballotDummyData.js';


export default function checkRegistration() {
  return (
    <Dashboard>
      <div className="bg-gray-100">
        {/* <h1>Official General Election Ballot</h1>
          <h2> Park County, Colorado</h2>
          <h3>Tuesday, November 3, 2020</h3> */}
        <h1 className="font-bold">{dummyData.election.name + ' Ballot'}</h1>
        <h2>Your Address:
            <br></br>
          {dummyData.normalizedInput.line1 + ' ' + dummyData.normalizedInput.city + ', ' + dummyData.normalizedInput.state + ' ' + dummyData.normalizedInput.zip}</h2>
        <h3>{dummyData.election.electionDay}</h3>
      </div>


      <div className="grid grid-cols-3 gap-x-2 h-full">

        <React.Fragment className='bg-gray-100'>
          {dummyData.contests.map((contest, j) => {
            return <div>
              <h1 className="font-bold">{contest.office}</h1>
              <form>
                {contest.candidates?.map((candidate, i) =>
                  <React.Fragment key={i}>
                    <label htmlFor={`${candidate.name}${i}`}>
                      {candidate.name + ' ' + candidate.party + ' '}
                    </label>
                    <input className='' name={`contest-${j}`} id={`${candidate.name}${i}`} type='radio' />
                    <br></br>
                  </React.Fragment>
                )}
              </form>
            </div>
          })}
        </React.Fragment>

      </div>
    </Dashboard>

  );
};