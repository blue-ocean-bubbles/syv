/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Footer = () => (
    <div>
      <footer className={styles.footer}>
        <a
          href="http://www.blueoceantechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="https://www.seoblog.com/wp-content/uploads/2019/10/BOGT-standard-logo.png" width={100} height={30} />
          </span>
        </a>
      </footer>
    </div>
);

export default Footer;
