/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

const StyledLink = ({ children, href, type }) => {
  const styles = 'transition text-center flex-1 bg-gray-500 bg-opacity-70 hover:bg-opacity-90 shadow-lg rounded-md text-white flex flex-row gap-4 justify-center items-center cursor-pointer relative group text-2xl font-extralight p-4';

  return (
    <span className={styles}>
      {type === 'a' && (
        <a href={href}>{children}</a>
      )}
      {type === 'l' && (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}
      <span className="transition group-hover:text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </span>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Secure Your Vote</title>
        <meta name="description" content="Online voting for Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-screen">
        <Navbar bg>
          <div className="flex flex-col mt-12 items-center">
            <div className="m-20">
              <div className="uppercase text-7xl font-black text-white text-center">
                Election information
              </div>
              <div className="uppercase text-7xl font-black text-yellow-400 text-center">
                you need
              </div>
              <div>
                Voting Online Has Never Been More Secure or Accessible Than With Secure Your Vote
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              <StyledLink href="https://www.vote.org/register-to-vote/" type="a">
                <h2>Register To Vote</h2>
              </StyledLink>
              <StyledLink href="/dashboard" type="l">
                <h2>Whats on your ballot</h2>
              </StyledLink>
              <StyledLink href="https://app.mt.gov/voterinfo/" type="a">
                <h2>Check Your Registration Status</h2>
              </StyledLink>
              <StyledLink href="/dashboard" type="l">
                <h2>Get Election Notifications</h2>
              </StyledLink>
              <StyledLink href="/interactive-map" type="l">
                <h2>Get Information By State</h2>
              </StyledLink>
            </div>
          </div>
        </Navbar>
      </main>
    </div>
  );
}
