import React from 'react';
import axios from 'axios';
import Dashboard from '../../components/dashboard';

export default function Pledge() {
  return (
    <Dashboard>
      <iframe src="https://pledge.vote.org/?partner=111111&campaign=free-tools" className="h-full w-full pt-4" title="pledge" />
    </Dashboard>
  );
}

export async function getServerSideProps(context) {
  try {
    const { cookie } = context.req.headers;
    const res = await axios.get('http://localhost:3000/api/isAuthenticated', { headers: { cookie } });
    const { isLoggedIn } = res.data;

    // console.log(res, isLoggedIn);
    if (isLoggedIn) {
      return { props: { } };
    }
  } catch (err) {
    return {
      redirect: { destination: '/sign-in', permanent: false },
    };
  }
}
