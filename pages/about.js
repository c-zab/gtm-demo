import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>

      <ul>
        <li>
          <Link href='/'>
            <a>Go Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>Go About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Go Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
