import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Secure Your Vote</title>
        <meta name="description" content="Online voting for Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <Navbar />
        <div className=" absolute top-0 h-full w-full " style={{ zIndex: '50' }}>
          <h1 className={styles.title} style={{ zIndex: '50', paddingTop: '150px' }}>
            Welcome to Secure Your Vote
          </h1>
          <div className="absolute inline-block top-0 bg-gradient-to-r from-blue-900 via-blue-900 to-transparent" style={{ height: '500px', width: '100vw', zIndex: '-1' }}>

            <Image className="bg-center filter h-full relative opacity-60 contrast-120 brightness-40" style={{ zIndex: '-1' }} src="https://vote411-prod.s3.amazonaws.com/s3fs-public/2019-07/HomepageHero_blurred_lowres.jpg" alt="background" layout="fill" objectFit="cover" objectPosition="top center" />
          </div>
        </div>
        <div className={styles.container}>

          <div className={styles.grid} style={{ zIndex: '50' }}>
            <a href="https://www.vote.org/register-to-vote/" className={styles.card}>
              <h2>Register To Vote &rarr;</h2>
            </a>

            <Link href="/dashboard" className={styles.card}>
              <h2>Whats on your ballot &rarr;</h2>
            </Link>

            <a
              href="https://app.mt.gov/voterinfo/"
              className={styles.card}
            >
              <h2>Check Registration &rarr;</h2>
              <p>Determine by State if you are registered to Vote</p>
            </a>

            <a
              href="http://localhost:3000/dashboard"
              className={styles.card}
            >
              <h2>Get Notifications &rarr;</h2>
              <p>
                Sign up for election notifications sent right to your mobile phone
              </p>
            </a>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
