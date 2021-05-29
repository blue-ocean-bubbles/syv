import React from 'react';
import { useRouter } from 'next/router';

export default function State() {
  const router = useRouter();
  const state = () => router.query.state.replace(/\s+/g, '-').toLowerCase();

  return (
    <div>
      <a href={`https://www.vote411.org/${state()}`} />
    </div>

  )
}


// export async function getServerSideProps(context) {
//   // console.log({context});
//   let state = context.query.state;


//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto(`https://www.vote411.org/${state}`);
//   await page.waitForSelector('#absentee-ballot-process');
//   // let innerHTML = await page.$('body');

//   // console.log({ puppeteer });
//   // console.log({ browser });
//   // console.log({ page });
//   let innerHTML = await page.$eval('#absentee-ballot-process', (element) => {
//     // console.log(element.innerHTML);
//     return element.innerHTML;
//   })

  // await browser.close();
  // return {
  //   props: {},
  // };
//}

// absentee-ballot-process