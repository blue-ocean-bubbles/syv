import React from 'react';
import Dashboard from '../../components/dashboard';
import dummyData from './ballotDummyData.jsx';

export default function checkRegistration() {
  return (
    <Dashboard>
      <div className="bg-gray-100 p-5">
        {/* <h1>Official General Election Ballot</h1>
          <h2> Park County, Colorado</h2>
          <h3>Tuesday, November 3, 2020</h3> */}
        <h1 className="font-bold text-lg">{`${dummyData.election.name} Ballot`}</h1>
        <h2>{dummyData.election.electionDay}</h2>
        <h2 className="">
          Your Address:
          <br />
          {`${dummyData.normalizedInput.line1} ${dummyData.normalizedInput.city}, ${dummyData.normalizedInput.state} ${dummyData.normalizedInput.zip}`}
        </h2>
      </div>

      <div className="bg-gray-100 grid grid-cols-3 gap-x-5 gap-y-5 h-full p-5">
        {/* {dummyData.contests.map((contest, j) => {
            return <div>
              <h1 className="font-bold">{contest.office}</h1>
              <form>
                {contest.candidates?.map((candidate, i) =>
                  <React.Fragment key={i}>
                    <label htmlFor={`${candidate.name}${i}`}>
                      {candidate.name + ' ' + candidate.party + ' '}
                    </label>
                    <input className="" name={`contest-${j}`} id={`${candidate.name}${i}`} type="checkbox" />
                    <br></br>
                  </React.Fragment>
                )}
              </form>
            </div>
          })} */}
        {dummyData.contests.map((contest) => (
          <div>
            <h1 className="font-bold">{contest.office}</h1>
            <div>
              {contest.candidates?.map((candidate) => (
                <>
                  <div>{`${candidate.name}`}</div>
                  <div className="text-right">
                    {`${candidate.party} `}
                    <input type="checkbox" />
                  </div>
                </>
              ))}
              <form>
                <label htmlFor="write-in">
                  Write-In:
                  <input type="text" name="name" />
                </label>
              </form>
            </div>
          </div>
        ))}

      </div>
      <div className="text-right">
        <button onClick="do something">Submit</button>
      </div>
    </Dashboard>

  );
}
