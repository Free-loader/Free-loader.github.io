import React from 'react';
import { motion } from 'framer-motion';

import { AppDev, WebDev, WebDes, GrDes, Seo, VidEd } from '../static';

import { Navbar } from '../';

import styles from './Services.module.css';

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

const TTB = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: 'spring', stiffness: 50 }
  }
};

const data = [
  {
    title: 'App Development',
    descLarge:
      'Design and Development of IOS & Android applications for your business with excellent UI that will enhance your business.',
    descSmall: 'Cross Platform with Android and IOS support',
    Icon: AppDev
  },
  {
    title: 'Web Development',
    descLarge:
      'No matter the size and scope of your project, our developers will create an effective website for you that meets your needs and advances your goals.',
    descSmall: 'Full user friendly and responsive Websites',
    Icon: WebDev
  },
  {
    title: 'Web Designing',
    descLarge:
      'With a relentless focus on users’ needs, we design sites and their UI that grow brands and drive audiences to action.',
    descSmall: 'Attractive and user friendly UI/UX',
    Icon: WebDes
  },
  {
    title: 'Graphic Designing',
    descLarge:
      'We offer outstanding and attention-grabbing visuals for brochures, banners, flyers, business cards, e-books and many more.',
    descSmall: 'Posters|Brochures|Pamphltes',
    Icon: GrDes
  },
  {
    title: 'Seo-Digital Marketing',
    descLarge:
      'Our SEO specialists will help you position your website properly to be found at the most critical points in the buying process or when people need your site. ',
    descSmall: 'Increase traffic to your website',
    Icon: Seo
  },
  {
    title: 'Video Editing',
    descLarge:
      'We will help you navigate through strategy, storyboarding and execution phases so that your story complements your brand and engages your target audiences.',
    descSmall: 'After Effects | Motion Graphics',
    Icon: VidEd
  }
];

function Services() {
  const mainContent = (Icon, title, desc, index) => {
    return (
      <div key={index} className={styles['sec']}>
        <span>
          <Icon />
          <h6>{title}</h6>
        </span>
        <p>{desc}</p>
      </div>
    );
  };

  const cardContent = (Icon, title, desc, index) => {
    const st = ['economy', 'premiumeconomy', 'business', 'first', 'first1', 'first2'];

    return (
      <div key={index} className={styles[`${st[index]}`]}>
        <Icon />
        <h3>{title}</h3>
        <span>{desc}</span>
      </div>
    );
  };

  return (
    <div className={styles['services']}>
      <div className={styles['header']}>
        <Navbar />
        <motion.h1 variants={TTB} initial="hidden" animate="visible">
          Services
        </motion.h1>
      </div>
      <div className={styles['panel']}>
        <motion.div variants={LTR} initial="hidden" animate="visible" className={styles['left-side']}>
          <h1>WHAT WE DO</h1>
          <h3>Extra Ordinary Flexibility Features</h3>
          <div className={styles['content']}>
            {data.map((elem, index) => mainContent(elem.Icon, elem.title, elem.descLarge, index))}
          </div>
        </motion.div>
        <motion.div variants={RTL} initial="hidden" animate="visible" className={styles['right-side']}>
          <div className={['bodycards']}>
            <div className={styles['tariffCards']}>
              {data.slice(0, 3).map((elem, index) => cardContent(elem.Icon, elem.title, elem.descSmall, index))}
            </div>
            <div className={styles['tariffCards1']}>
              {data.slice(3, 6).map((elem, index) => cardContent(elem.Icon, elem.title, elem.descSmall, index + 3))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
