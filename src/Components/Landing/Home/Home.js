import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Hand } from '../../static';

import styles from './Home.module.css';
import commons from '../Common.module.css';

const LTR = {
  hidden: { x: '-100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

const RTL = {
  hidden: { x: '100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'tween' }
  }
};

const content = [
  'Helping you with various web projects & classy design, all for a low cost & continuous customer interaction. Rest assured, for your dream project will be prepared with utmost dedication by us.',
  '"Grow business, beyond thinking", inventive & customized absolute IT solution to enhance the business brand. We specialize in designing hi-tech, best-in-class experiences in an agile environment.',
  'Our team excels at ensuring hundred percent client satisfaction, helping businesses strengthen their online presence, providing the solutions to your problems with best logical driven algorithms.'
];

function Home() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count === 2 ? 0 : count + 1);
    }, 6500);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div className={commons['main-flex']}>
      <motion.div variants={LTR} initial="hidden" animate="visible" className={commons['main-column']}>
        <h1>Freeloader</h1>
        <div className={commons['row-flex']}>
          <div className={commons['page-finder']}>
            <h2>01</h2>
            <h4>0{count + 1}</h4>
          </div>
          <div className={commons['vertical-line']}></div>
          {
            <p className={commons['scrolling-text']} style={{ animation: 'move 1s ease-in-out' }}>
              {content[count]}
            </p>
          }
        </div>
      </motion.div>
      <motion.div variants={RTL} initial="hidden" animate="visible" className={styles['image-container']}>
        <Hand />
      </motion.div>
    </div>
  );
}

export default Home;
