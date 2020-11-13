/* eslint-disable-next-line */
import React from 'react';

import hamburger from '../Images/hamburger.png';
import hand from '../Images/hand.png';

export { ReactComponent as Logo } from '../Images/svg/logo.svg';
export { ReactComponent as Play } from '../Images/svg/play.svg';
export { ReactComponent as ArrowDown } from '../Images/svg/arrowDown.svg';
export { ReactComponent as Back } from '../Images/svg/backArrow.svg';
export { ReactComponent as Bag } from '../Images/svg/bag.svg';
export { ReactComponent as Skill } from '../Images/svg/skills.svg';
export { ReactComponent as AppDev } from '../Images/svg/service1.svg';
export { ReactComponent as WebDev } from '../Images/svg/service2.svg';
export { ReactComponent as WebDes } from '../Images/svg/service3.svg';
export { ReactComponent as GrDes } from '../Images/svg/service4.svg';
export { ReactComponent as Seo } from '../Images/svg/service5.svg';
export { ReactComponent as VidEd } from '../Images/svg/service6.svg';
export { ReactComponent as Github } from '../Images/svg/github.svg';
export { ReactComponent as Facebook } from '../Images/svg/facebook.svg';
export { ReactComponent as Linkedin } from '../Images/svg/linkedin.svg';
export { ReactComponent as Instagram } from '../Images/svg/instagram.svg';
export { ReactComponent as Loader } from '../Images/svg/preloader.svg';

export function Hamburger() {
  return <img src={hamburger} alt="Hamburger" />;
}

export function Hand() {
  return <img src={hand} alt="Hand" />;
}
