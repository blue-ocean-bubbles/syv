import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { javascriptBarcodeReader } from 'javascript-barcode-reader';

export default function Home() {
  const read = () => {
    javascriptBarcodeReader({
      /* Image ID || HTML5 Image || HTML5 Canvas || HTML5 Canvas ImageData || Image URL */
      image: 'https://i.imgur.com/lC1SBgQ.jpg',
      barcode: 'code-2of5',
      // barcodeType: 'industrial',
      options: {
        // useAdaptiveThreshold: true
        // singlePass: true
      }
    })
      .then(code => {
        console.log(code)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <Head>
        <title>Secure Your Vote</title>
        <meta name="description" content="Online voting for Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <button onClick={read}>scan</button>
      </main>
    </div>
  );
}
