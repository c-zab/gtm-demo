import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact</h1>

      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
