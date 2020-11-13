import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';

import DisplayCard from './DisplayCard';

import styles from './Meet.module.css';
import commons from '../Common.module.css';

const Scale = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: 'easeInOut', delay: 0, duration: 0.7, type: 'spring', stiffness: 80 }
  }
};

const ScaleAvatar = {
  tap: {
    scale: 0.9,
    transition: { type: 'spring', stiffness: 300 }
  },
  whileHover: {
    scale: 1.1,
    cursor: 'pointer',
    boxShadow: '0px 0px 5px rgb(255,255,255)'
  }
};

const RTL = {
  hidden: { x: '100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0, type: 'spring', stiffness: 50 }
  }
};

const content = [
  'Our high-end services enables you to shift gears across technical platforms with perfect ease. We solve complex engineering challenges.',
  "Our team is extremely supportive and understanding and gives impeccable end to end solution by listening client's ideas. We would increase your business market value and build native apps.",
  'We have developed many customized websites for a broad range of clients. We have wide spectrum of packages which suits every big to small business houses.'
];

const row1 = ['Khuzema', 'Oishik', 'Adarsh'];
const row2 = ['Lakshita', 'Disha'];

function Meet() {
  const [card, changeCard] = useState(0);
  let [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count === 2 ? 0 : count + 1);
    }, 6500);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const renderCard = (event, target) => {
    event.preventDefault();
    changeCard(target);
  };

  const closeCard = (event) => {
    event.preventDefault();
    changeCard(0);
  };

  const renderMini = (index, name) => {
    return (
      <motion.div
        key={index}
        variants={ScaleAvatar}
        whileHover="whileHover"
        whileTap="tap"
        transition={{ type: 'spring', stiffness: 150 }}
        className={cx(styles['persona'], styles[`persona-${index + 1}`])}
        onClick={(e) => renderCard(e, index + 1)}
      >
        <p>{name}</p>
      </motion.div>
    );
  };

  return (
    <div className={commons['main-flex']}>
      <motion.div variants={Scale} initial="hidden" animate="visible" className={commons['main-column']}>
        <h1>Meet Us</h1>
        <div className={commons['row-flex']}>
          <div className={commons['page-finder']}>
            <h2>02</h2>
            <h4>0{count + 1}</h4>
          </div>
          <div className={commons['vertical-line']}></div>
          <div>
            <p>{content[count]}</p>
          </div>
        </div>
      </motion.div>
      <motion.div variants={RTL} initial="hidden" animate="visible" className={styles['identity-container']}>
        {card !== 0 && <DisplayCard data={{ card, closeCard }} />}
        <div className={styles['row-1']}>
          {row1.map((peep, ind) => {
            return renderMini(ind, peep);
          })}
        </div>
        <div className={styles['row-2']}>
          {row2.map((peep, ind) => {
            return renderMini(ind + 3, peep);
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Meet;
