import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from './navbar.js';
import Footer from './footer.js';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Secure Your Vote</title>
        <meta name="description" content="Online voting for Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.container}>
      <Image className="bg-cover bg-center" src="https://vote411-prod.s3.amazonaws.com/s3fs-public/2019-07/HomepageHero_blurred_lowres.jpg" alt="background" height={600} width={1000}/>

      {/* <div className="bg-auto bg-no-repeat bg-center" style={{backgroundImage: `url(${"https://vote411-prod.s3.amazonaws.com/s3fs-public/2019-07/HomepageHero_blurred_lowres.jpg"})`}}></div> */}

        <h1 className={styles.title}>
          Welcome to Secure Your Vote
        </h1>
        <div className={styles.grid}>
          <a href="https://www.vote.org/register-to-vote/" className={styles.card}>
            <h2>Register To Vote &rarr;</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>What's on your ballot &rarr;</h2>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Check Registration &rarr;</h2>
            <p>Determine by State if you are registered to Vote</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Get Notifications &rarr;</h2>
            <p>
              Sign up for election notifications sent right to your mobile phone
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
