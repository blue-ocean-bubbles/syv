import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from '../../components/dashboard';
import dummyData from './ballotDummyData';

export default function Ballot() {
  const [ballot, setBallot] = useState({});

  const handleCheck = (office, input, multipleAllowed = true, maxVotes = 3) => {
    const newBallot = JSON.parse(JSON.stringify(ballot));
    if (newBallot[office] === undefined) {
      newBallot[office] = { check: [input] };
    } else if (newBallot[office].check?.length < 3) {
      newBallot[office].check.push(input);
    } else {
      newBallot[office].check = [input];
    }
    setBallot(newBallot);
  };

  const handleUncheck = (office, input) => {
    const newBallot = JSON.parse(JSON.stringify(ballot));
    if (newBallot[office].check.includes(input)) {
      const index = newBallot[office].check.indexOf(input);
      newBallot[office].check.splice(index, 1);
    }
    setBallot(newBallot);
  };

  const handleWriteIn = (office, input) => {
    const newBallot = JSON.parse(JSON.stringify(ballot));
    if (newBallot[office] === undefined || newBallot[office].writeIn === undefined) {
      newBallot[office] = { writeIn: input };
    } else {
      newBallot[office].writeIn = (input);
    }
    setBallot(newBallot);
  };

  const handleSubmit = () => {
    axios.post('/api/ballot', ballot)
      .then((response) => {
        console.log('response', response);
      });
  };

  return (
    <Dashboard>
      <>
        <div className="bg-gray-100 p-5">
          <h1 className="font-bold text-lg">{`${dummyData.election.name} Ballot`}</h1>
          <h2>{dummyData.election.electionDay}</h2>
          <h2 className="">
            Your Address:
            <br />
            {`${dummyData.normalizedInput.line1} ${dummyData.normalizedInput.city}, ${dummyData.normalizedInput.state} ${dummyData.normalizedInput.zip}`}
          </h2>
        </div>

        <div className="bg-gray-100 grid grid-cols-3 gap-x-5 gap-y-5 h-full p-5">
          {dummyData.contests.map((contest, j) => (
            <div key={j}>
              <h1 className="font-bold">{contest.office}</h1>
              <div>
                {contest.candidates?.map((candidate, i) => (
                  <React.Fragment key={i}>
                    <div>{`${candidate.name}`}</div>
                    <div className="text-right">
                      {`${candidate.party} `}
                      <input type="checkbox" onChange={(e) => (e.target.checked ? handleCheck(contest.office, candidate.name, true) : handleUncheck(contest.office, candidate.name))} />
                    </div>
                  </React.Fragment>
                ))}
                Write-in:
                <input
                  type="text"
                  name="name"
                  value={ballot[contest.office]?.writeIn || ''}
                  onChange={(e) => handleWriteIn(contest.office, e.target.value)}
                />
              </div>
            </div>
          ))}

          <button onClick={() => handleSubmit()}>Submit</button>

        </div>
      </>
    </Dashboard>

  );
}
