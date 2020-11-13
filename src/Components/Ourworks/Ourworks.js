import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Navbar } from '../';
import Carousel from './Carousel';

import { AppDev, WebDev, GrDes } from '../static';

import { app, graphics, website } from './data.json';

import styles from './Ourworks.module.css';

const Scale = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: 'easeInOut', delay: 0.3, duration: 0.7, type: 'spring', stiffness: 80 }
  }
};

const TTB = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 40 }
  }
};

const BTT = {
  hidden: { y: '100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
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

const targetMap = [graphics, website, app];

function Ourworks() {
  let [category, setCategory] = useState(0);

  const handleClick = (target) => (event) => {
    event.preventDefault();
    setCategory(target - 1);
  };

  const detail = [
    <GrDes className={styles['image']} onClick={handleClick(1)} />,
    <WebDev className={styles['image']} onClick={handleClick(2)} />,
    <AppDev className={styles['image']} onClick={handleClick(3)} />
  ];

  const icoRender = (element, index) => {
    return (
      <motion.div
        key={index}
        variants={ScaleAvatar}
        whileHover="whileHover"
        whileTap="tap"
        transition={{ type: 'spring', stiffness: 150 }}
        className={styles['pic']}
      >
        {element}
      </motion.div>
    );
  };

  return (
    <div className={styles['ourworks']}>
      <Navbar />
      <motion.h1 variants={TTB} initial="hidden" animate="visible" className={styles['heading2']}>
        Ourworks
      </motion.h1>
      <motion.div variants={Scale} initial="hidden" animate="visible" className={styles['carouselWrapper']}>
        <Carousel slides={targetMap[category]} />
      </motion.div>
      <motion.div variants={BTT} initial="hidden" animate="visible" className={styles['yoo']}>
        <div className={styles['line']}></div>
        <div className={styles['imageWrp']}>{detail.map(icoRender)}</div>
      </motion.div>
    </div>
  );
}

export default Ourworks;
