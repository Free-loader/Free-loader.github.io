import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.main}>
        <h1 className={styles.windowHead}>404</h1>
        <div className={styles.icon}>
          <NavLink to="/">
            <div className={styles.close}> </div>
          </NavLink>
          <NavLink to="/">
            <div className={styles.zoom}> </div>
          </NavLink>
          <NavLink to="/">
            <div className={styles.minimize}> </div>
          </NavLink>
        </div>
        <pre>
          <code>
            <span className={styles['blue']}>function </span>( inDevelopment ) {'{\n\t'}
            <span className={styles['blue']}>function </span>
            <span className={styles.launch}>launch</span>(){' {\n\t\t'}
            <span className={styles['blue']}>if </span>( inDevelopment ) {'{\n\t\t\t'}
            <span className={styles['blue']}>return</span>;{'\n\t\t}\t'}
            <span className={styles['comment']}>{' //TODO\n\t'}</span>
            {'}\n}'}
          </code>
        </pre>
      </div>
      <h1 className={styles.title}>Hey, this is a wrong turn, go back !!!</h1>
      <p className={styles.link}>
        <Link className={styles.attr} to="/">
          Go to Home
        </Link>
      </p>
    </div>
  );
}

export default Error;
