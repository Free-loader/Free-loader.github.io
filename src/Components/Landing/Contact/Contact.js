import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ContactForm from './ContactForm';

import commons from '../Common.module.css';

const Scale = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: 'easeInOut', delay: 0, duration: 0.7, type: 'spring', stiffness: 80 }
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
  'We appreciate your interest in Freeloader for any queries related to Online Marketing or any other range of services offered by us, Our team will be at your service.',
  'Freeloader is here to provide you all the information you are looking for and answer to all your queries. You are just a call away to start your online business journey!',
  'Please fill the form and get in touch with us. We can surely reach out to you in a short time.'
];

function Contact() {
  let [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(width < 785);

  useEffect(() => {
    const manageWidth = () => {
      setWidth(window.innerWidth);
      if (width < 785) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    };

    window.addEventListener('resize', manageWidth);
    return () => {
      window.removeEventListener('resize', manageWidth);
    };
  }, [width]);

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
      <motion.div variants={Scale} initial="hidden" animate="visible" className={commons['main-column']}>
        <h1>Contact Us</h1>
        <div className={commons['row-flex']}>
          <div className={commons['page-finder']}>
            <h2>03</h2>
            <h4>0{count + 1}</h4>
          </div>
          <div className={commons['vertical-line']}></div>
          <div>
            <p>{content[count]}</p>
          </div>
        </div>
      </motion.div>
      {responsive ? (
        <div>
          <ContactForm />
        </div>
      ) : (
        <motion.div variants={RTL} initial="hidden" animate="visible">
          <ContactForm />
        </motion.div>
      )}
    </div>
  );
}

export default Contact;
