import React from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';

export default function StatePage({ voterInfo }) {
  return (
    // console.log(props.voterInfo);
    <Navbar>
      {voterInfo.contests.map((contest) => {
        if (contest.type === 'General') {
          return (

            <div>
              <h1 className="font-bold">{contest.office}</h1>
              <div>
                {contest.candidates?.map((candidate, i) => (
                  <React.Fragment key={i}>
                    <div>{candidate.name}</div>
                    <div className="text-right">
                      {candidate.party}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

          );
        }
      })}
    </Navbar>
  );
}

export async function getServerSideProps(context) {
  const electionId = 2000;
  const key = process.env.CIVIC_API;
  const address = ` , , ${context.query.state} `;

  const voterInfo = (await axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo', { params: { key, address, electionId } })).data;

  return {
    props: {
      voterInfo,
    },
  };
}
