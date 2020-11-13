import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import Card from './Card';
import { Navbar } from '../';

import { AppDev, WebDev, GrDes, WebDes, Seo, VidEd } from '../static';

import { DataLayerContext } from '../../Context/Context';

import styles from './Pricing.module.css';

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

const prices = [
  {
    Icon: AppDev,
    iconName: 'Service 1',
    name: 'App Developement',
    data: ['Flutter App development', 'Cross Platform', 'Excellent UI/UX interface', 'Backend Integration'],
    desc:
      'Our profound knowledge of mobile technologies and frameworks, help us create secure and cross-platform mobile apps with great UX.',
    awards: '4',
    percent: '70',
    pals: '3',
    prc: '₹3500+'
  },
  {
    Icon: WebDev,
    iconName: 'Service 2',
    name: 'Web Developement',
    data: ['React-js development', 'Server-Side Development', 'HTML/CSS/JAVASCRIPT', 'E-commerce Development'],
    desc:
      'Technologically expertise coupled with excellent UI/UX skills. We always follow the trend and have an amazing expertise in React-js and its libraries.',
    awards: '7',
    percent: '65',
    pals: '3',
    prc: '₹2000+'
  },
  {
    Icon: GrDes,
    iconName: 'Service 3',
    name: 'Graphic Designing',
    data: ['Logo Design', 'Poster Design', 'Abode Illustrator', 'Adobe Photoshop'],
    desc:
      ' Professional and experienced team members working with Adobe Illustrator, Photoshop, After Effects & Premeire Pro.',
    awards: '8',
    percent: '30',
    pals: '3',
    prc: '₹500+'
  },
  {
    Icon: WebDes,
    iconName: 'Service 4',
    name: 'Web Design',
    data: ['UX Research', 'Information Architecture', 'Wireframes', 'Interactive Design'],
    desc:
      "We strategically set up your company business website and give you complete control over your website's navigation, content pages and design to start selling online.",
    awards: '6',
    percent: '50',
    pals: '3',
    prc: '₹1000+'
  },
  {
    Icon: Seo,
    iconName: 'Service 5',
    name: 'SEO-Digital Marketing',
    data: [
      'Search Engine Optimization(SEO)',
      'Search Engine Marketing(SEM)',
      'Social Media Marketing',
      'Analysis Consultation'
    ],
    desc:
      'We ensure that our SEO strategy delivers the right traffic to your website by identifying your target audience and selecting the right keyword combinations.',
    awards: '5',
    percent: '30',
    pals: '3',
    prc: '₹500+'
  },
  {
    Icon: VidEd,
    iconName: 'Service 6',
    name: 'Short Film Editing',
    data: ['Motion Graphics', 'Explainer Videos', '2D Animated Videos', '3D Animated Videos'],
    desc:
      "We create awesome explainer videos of all types, that'd improve your brand story telling and user engagement which results in higher conversions.",
    awards: '5',
    percent: '90',
    pals: '3',
    prc: '₹4500+'
  }
];

function Prices() {
  /* eslint-disable-next-line */
  const [state, dispatch] = useContext(DataLayerContext);

  const handleContactClick = (event) => {
    dispatch({ type: 'SET_CONTACT_SLIDE', contactSlide: 2 });
  };

  return (
    <div className={styles['main-container']}>
      <Navbar />
      <div className={styles['prices']}>
        <motion.p variants={TTB} initial="hidden" animate="visible">
          {` Pricing `}
        </motion.p>
      </div>
      <motion.div variants={BTT} initial="hidden" animate="visible">
        <div className={styles['center']}>
          {prices.map((e, i) => {
            return <Card key={i} props={{ ...e, handleContactClick }} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Prices;
