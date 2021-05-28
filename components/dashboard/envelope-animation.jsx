import React from 'react';
import styles from '../../styles/envelope.module.css';

export default function EnvelopeAnimation({ show }) {

  return (
    <div className={styles.bg}>
      <div className={!show ? styles.contact : `${styles.contact} ${styles.transition}`}>
        <div className={styles.envelope}>
          <div className={styles.top}>
            <div className={styles.outer}><div className={styles.inner} /></div>
          </div>
          <div className={styles.bottom} />
          <div className={styles.left} />
          <div className={styles.right} />
          <div className={styles.cover} />
          <div className={styles.paper}>
            <a className={styles.call} href="tel:5555555555">
              Secure Your Vote
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}
