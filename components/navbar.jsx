/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => (
  <nav className="inline-flex">
    <div className="text-lg relative" style={{ zIndex: '99' }}>
      <Link href="/">
        <button className={styles.homeBtn}><img src="https://dcassetcdn.com/design_img/20099/20494/20494_463586_20099_thumbnail.jpg" height="100px" width="100px" /></button>
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/sign-in">
          <a>
            {' '}
            <span className={styles.links}>Sign In</span>
            {' '}
          </a>
        </Link>
        {' '}
        |
        <Link href="/sign-up">
          <a>
            {' '}
            <span className={styles.links}>Sign Up</span>
            {' '}
          </a>
        </Link>
        {' '}
        |
        <Link href="/donate">
          <a>
            <span className={styles.links}>Donate</span>
            {' '}
          </a>
        </Link>
      </div>

    </div>
  </nav>
);

export default Navbar;
