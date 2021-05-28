import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '../components/background';

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
        <Background />
        <div className={styles.container}>

          <div className={styles.grid} style={{ zIndex: '50' }}>
            <a href="https://www.vote.org/register-to-vote/" className={styles.card}>
              <h2>Register To Vote &rarr;</h2>
            </a>

            <a className={styles.card} href="/dashboard">
              <h2>Whats on your ballot &rarr;</h2>
            </a>

            <a
              href="https://app.mt.gov/voterinfo/"
              className={styles.card}
            >
              <h2>Check Registration &rarr;</h2>
              <p>Determine by State if you are registered to Vote</p>
            </a>

            <a
              href="/dashboard"
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
