import React from 'react';
import axios from 'axios';

import Dashboard from '../../components/dashboard';
import ElectionCard from '../../components/dashboard/election-card';

import voterInfoData from '../../samples/voterInfoQuery';

export default function DashboardHome(props) {
  // console.log(props)
  return (
    <Dashboard>
      <div className="flex flex-col h-full">
        <div className="text-4xl pl-8 pt-8 text-gray-800 font-bold">
          Your Upcoming Elections
        </div>
        <div className="text-2xl pl-8 text-gray-500 font-light">
          View voting, election, and representative information based on your location
        </div>
        <div className="shadow-xl m-8 mt-8 flex-grow rounded-xl">
          <ElectionCard election={props.voterInfo} />
        </div>
      </div>

    </Dashboard>
  );
}

export async function getStaticProps(context) {
  const key = process.env.CIVIC_API;
  const voterInfo = voterInfoData; // (await axios.get('https://www.googleapis.com/civicinfo/v2/elections', { params: { key } })).data;
  return { props: { voterInfo } };
}
