/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import Dashboard from '../../components/dashboard';
import dummyData from '../../samples/ballotDummyData';
import BallotAnimation from '../../components/dashboard/ballotAnimation';

function Ballot() {
  const [animation, animate] = useState(false);
  const [ballot, setBallot] = useState({});

  const handleCheck = (office, input, district) => {
    const newBallot = JSON.parse(JSON.stringify(ballot));
    newBallot[office] = { check: input, id: district };
    setBallot(newBallot);
  };


  const handleWriteIn = (office, input, district) => {
    const newBallot = JSON.parse(JSON.stringify(ballot));
    newBallot[office] = { writeIn: input, id: district };

    if (newBallot[office].writeIn === '') {
      delete newBallot[office];
    }
    setBallot(newBallot);
  };

  const handleReferendum = (title, input, district) => {
    // console.log('input', input);
    const newBallot = JSON.parse(JSON.stringify(ballot));
    newBallot[title] = { vote: input, id: district };
    setBallot(newBallot);
  };

  const handleSubmit = () => {
    const ballotArr = [];

    for (const key of Object.keys(ballot)) {
      if (ballot[key].check !== undefined) {
        ballotArr.push({ name: ballot[key].check, contest: key, districtId: ballot[key].id });
      }
      if (ballot[key].writeIn !== undefined) {
        ballotArr.push({ name: ballot[key].writeIn, contest: key, districtId: ballot[key].id });
      }
      if (ballot[key].vote !== undefined) {
        ballotArr.push({ name: ballot[key].vote, contest: key, districtId: ballot[key].id });
      }
    }

    console.log('ballot', ballotArr);
    // axios.post('/api/ballot', ballotArr)
    // .then(() => {
    // animations
    animate(true);
    setTimeout(() => {
      animate(false);
    }, 15000);
    // });
  };

  return (
    <Dashboard>
      <>
        <div className="bg-gray-100 p-5">
          <h1 className="font-bold text-lg">{`${dummyData.election.name} Ballot`}</h1>
          <h2>{dummyData.election.electionDay}</h2>
          <h2>
            Your Address:
            <br />
            {`${dummyData.normalizedInput.line1} ${dummyData.normalizedInput.city}, ${dummyData.normalizedInput.state} ${dummyData.normalizedInput.zip}`}
          </h2>
        </div>

        {/* filter((contest) => contest.type === 'General') */}

        <div className="bg-gray-100 grid grid-cols-3 gap-x-5 gap-y-5 h-full p-5">
          {dummyData.contests.map((contest, j) => {
            if (contest.type === 'General') {
              return (
                <div key={j}>
                  <h1 className="font-bold">{contest.office}</h1>
                  <div>
                    {contest.candidates?.map((candidate, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div>{`${candidate.name}`}</div>
                          <div className="text-right">
                            {`${candidate.party} `}
                            <input
                              type="radio"
                              name={contest.office}
                              onChange={() => (handleCheck(contest.office, candidate.name, contest.district.id))}
                              checked={ballot[contest.office]?.check === candidate.name}
                            />

                          </div>
                        </React.Fragment>
                      );
                    })}

                    Write-in:
                    <input
                      type="text"
                      name="name"
                      value={ballot[contest.office]?.writeIn || ''}
                      // eslint-disable-next-line max-len
                      onChange={(e) => handleWriteIn(contest.office, e.target.value, contest.district.id)}
                    />
                  </div>
                </div>
              );
            }
            if (contest.type === 'Referendum') {
              return (
                <div key={j}>
                  <h1 className="font-bold">{contest.referendumTitle}</h1>
                  <label htmlFor="Yes">
                    Yes
                    <input id="Yes" name={contest.referendumTitle} type="radio" value="Yes" onClick={(e) => handleReferendum(contest.referendumTitle, e.target.value, contest.district.id)} />
                  </label>

                  <label htmlFor="No">
                    No
                    <input id="No" name={contest.referendumTitle} type="radio" value="No" onClick={(e) => handleReferendum(contest.referendumTitle, e.target.value, contest.district.id)} />
                  </label>
                </div>
              );
            }
          })}

          { /* Submit Button */}
          <br />
          <div className="border-4 text-center active:bg-red-700 border-red-100" onClick={handleSubmit}>Submit</div>

          {/* Animation */}
          {animation ? (
            <Confetti
              width={document.documentElement.scrollWidth}
              height={document.documentElement.scrollHeight}
            />
          ) : null}
          {animation ? <BallotAnimation /> : null}

        </div>
      </>
    </Dashboard>

  );
}

export default Ballot;
