import React from 'react';

import { Back, Bag, Skill, Github, Linkedin, Facebook, Instagram } from '../../static';

import khuzi from '../../../Images/avatar/full/khuzi.jpg';
import lakshita from '../../../Images/avatar/full/lakshita.jpg';
import oishik from '../../../Images/avatar/full/oishik.jpg';
import adarsh from '../../../Images/avatar/full/adarsh.jpg';
import disha from '../../../Images/avatar/full/disha.jpg';

import styles from './DisplayCard.module.css';

const data = [
  {
    name: 'Khuzema Khomosi',
    desc:
      "I'm a Full stack Web & App Developer, Graphic Designer, Video Editor, Content Creator & a software developer from India. I'm also currently pursuing my B.Tech education in Computer Science Engg. while working on a few projects & freelancing.",
    skills:
      'UI/UX, Adobe Photoshop/ Illustrator/ After Effects/ Premeire Pro, React.Js, Flutter, Node.js, Python, C/C++',
    image: khuzi,
    github: 'https://github.com/khuzema786',
    linkedin: 'https://www.linkedin.com/in/khuzema-khomosi-485828140/',
    instagram: 'https://www.instagram.com/khuzema_khomosi/',
    facebook: 'https://www.facebook.com/khuzema894'
  },
  {
    name: 'Oishik Mandal',
    desc:
      "I'm a Full stack Web & App Developer. I specialize in clean and minimalistic UI, optimized for speed and security. I mostly design UIs and focus on the backend to ensure security and optimum speed, while supporting the team.",
    skills:
      'HTML, CSS, JS & NODE JS, Python, C/C++, UI/UX, Illustrator & Photshop, After Effects, Premiere Pro & Da Vinci Resolve',
    image: oishik,
    github: 'https://github.com/oishikm12',
    linkedin: 'https://www.linkedin.com/in/oishik-mandal-539164170/',
    instagram: 'https://www.instagram.com/11_oishik/',
    facebook: 'https://www.facebook.com/oishik.mandal.39'
  },
  {
    name: 'Adarsh Malviya',
    desc:
      "Innovative Full-Stack Web Developer with months of experience in designing, building and maintaining responsive websites in the industry. Passionate about developing amazing UI/UX to meet the customer's requirement.",
    skills: 'HTML/CSS, JavaScript, Python, C/C++, React.Js,Adobe-XD, UI/UX, Graphic Design, Cloud Development',
    image: adarsh,
    github: 'https://github.com/adarshmalviyaa',
    linkedin: 'https://www.linkedin.com/in/adarsh-malviya-96a75318b/',
    instagram: 'https://www.instagram.com/_adarsh_1001/',
    facebook: 'https://www.facebook.com/adarsh.malviya.07'
  },
  {
    name: 'Lakshita Agarwal',
    desc:
      'I am Full stack web and App developer. I am currently working on various Front-End Web Design and have extensive experience working on various projects on React-js and node-js . I am passionate about Machine learning and deep learning.',
    skills: 'HTML/CSS, C++, React. Js, Figma, Flutter, PHP, Server-Side Development, Python, Data Science, DataBases',
    image: lakshita,
    github: 'https://github.com/lak23shita',
    linkedin: 'https://www.linkedin.com/in/lakshita-agarwal23/',
    instagram: 'https://www.instagram.com/agarwal_lakshita/',
    facebook: 'https://www.linkedin.com/in/lakshita-agarwal23/'
  },
  {
    name: 'Disha Bajaj',
    desc:
      'I am a Full Stack Developer. I merge a passion for creating best UI/UX to create cool digital experience. My repertoire includes experience on various projects in designing and building responsive websites.',
    skills:
      'HTML/CSS, JavaScript, C++, Java, Python, React.Js, ADOBE XD, Django, AWS, Apache server configuration, Firebase.',
    image: disha,
    github: 'https://github.com/Disha-bajaj',
    linkedin: 'https://www.linkedin.com/in/disha-bajaj-6069121b0/',
    instagram: 'https://www.instagram.com/_disha_bajaj/?hl=en',
    facebook: 'https://www.linkedin.com/in/disha-bajaj-6069121b0/'
  }
];

function displayCard({ data: { card, closeCard } }) {
  return (
    <div className={styles['popup-container']}>
      <div className={styles['overlay-container']}></div>
      <div className={styles['card-container']}>
        <div className={styles['card-text']}>
          <div className={styles['card-header']}>
            <h1>{data[card - 1].name}</h1>
            <div className={styles['go-back']} onClick={closeCard}>
              <Back className={styles['back-arrow']} />
            </div>
          </div>
          <div className={styles['line-end']}></div>
          <div className={styles['card-container-flex']}>
            <div className={styles['card-container-left']}>
              <div className={styles['card-data-container']}>
                <Bag />
                <div className={styles['card-data']}>{data[card - 1].desc}</div>
              </div>
              <div className={styles['card-skill-container']}>
                <Skill />
                <div className={styles['card-skill']}>{data[card - 1].skills}</div>
              </div>
            </div>
            <div className={styles['card-container-right']}>
              <a target="_blank" rel="noreferrer noopener" href={data[card - 1].github}>
                <Github />
              </a>
              <a target="_blank" rel="noreferrer noopener" href={data[card - 1].linkedin}>
                <Linkedin />
              </a>
              <a target="_blank" rel="noreferrer noopener" href={data[card - 1].instagram}>
                <Instagram />
              </a>
              <a target="_blank" rel="noreferrer noopener" href={data[card - 1].facebook}>
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className={styles['card-img']} style={{ backgroundImage: `url(${data[card - 1].image})` }}></div>
      </div>
    </div>
  );
}

export default displayCard;
