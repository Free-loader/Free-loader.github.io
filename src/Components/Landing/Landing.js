import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Home from './Home/Home';
import Meet from './Meet/Meet';
import Contact from './Contact/Contact';
import Preloader from '../Preloader/Preloader';

import { Navbar } from '../';

import { Play, ArrowDown } from '../static';

import { DataLayerContext } from '../../Context/Context';

import styles from './Landing.module.css';

const BTT = {
  hidden: { y: '100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

const HomeButton = {
  tap: {
    scale: 0.9,
    transition: { type: 'spring', stiffness: 300 }
  }
};

const buttonText = ['Meet us', 'Contact', 'About'];

function Landing() {
  let [state, dispatch] = useContext(DataLayerContext);
  let [text, changeText] = useState(0);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2500);
  }, []);

  const nextSlide = (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_CONTACT_SLIDE', contactSlide: state.contactSlide === 2 ? 0 : (state.contactSlide += 1) });
    changeText(text < 2 ? text + 1 : (text = 0));
  };

  const renderElement = () => {
    switch (state.contactSlide) {
      case 0:
        return <Home />;
      case 1:
        return <Meet />;
      case 2:
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {loading ? (
        <div className={styles['main-container']}>
          <Navbar optional={state.contactSlide === 2} />
          {renderElement()}
          <motion.div variants={BTT} initial="hidden" animate="visible" className={styles['btn-main']}>
            <motion.button
              variants={HomeButton}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.1,
                cursor: 'pointer',
                boxShadow: '0px 0px 5px rgb(255,255,255)'
              }}
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 150 }}
              className={styles['btn-abt']}
              onClick={nextSlide}
            >
              <ArrowDown className={styles['icon-arrow-down']} />
              <p>{buttonText[text]}</p>
            </motion.button>
            <NavLink className={styles['btn-play']} to="/prices">
              <Play className={styles['icon-play']} />
            </NavLink>
          </motion.div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Landing;
