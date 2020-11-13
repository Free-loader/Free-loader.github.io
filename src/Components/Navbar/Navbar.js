import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import { Logo, Hamburger } from '../static';

import { DataLayerContext } from '../../Context/Context';

import styles from './Navbar.module.css';

function Navbar({ optional }) {
  /* eslint-disable-next-line */
  const [state, dispatch] = useContext(DataLayerContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(width < 785);
  const [clicked, changeClicked] = useState(false);

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

  const handleContactClick = (event) => {
    dispatch({ type: 'SET_CONTACT_SLIDE', contactSlide: 2 });
    changeClicked(false);
  };

  const handleHomeClick = (event) => {
    dispatch({ type: 'SET_CONTACT_SLIDE', contactSlide: 0 });
    changeClicked(false);
  };

  const handleHamClick = (event) => {
    event.preventDefault();
    changeClicked(true);
  };

  const handleCrossClick = (event) => {
    event.preventDefault();
    changeClicked(false);
  };

  const getStyle = () => {
    if (width < 1200 && optional) return { backgroundColor: 'black' };
    else return {};
  };

  return (
    <div className={!responsive ? styles['main-nav'] : styles['full-nav']} style={getStyle()}>
      <NavLink to="/" onClick={handleHomeClick}>
        <Logo />
      </NavLink>
      <div className={clicked ? cx(styles['nav-right'], styles['nav-overlay']) : styles['nav-right']}>
        {(!responsive || clicked) && (
          <NavLink to="/" onClick={handleHomeClick}>
            <p>Home</p>
          </NavLink>
        )}
        {(!responsive || clicked) && (
          <NavLink to="/services">
            <p>Services</p>
          </NavLink>
        )}
        {(!responsive || clicked) && (
          <NavLink to="/ourworks">
            <p>Our Works</p>
          </NavLink>
        )}
        {(!responsive || clicked) && (
          <NavLink to="/prices">
            <p>Pricing</p>
          </NavLink>
        )}
        {(!responsive || clicked) && (
          <NavLink to="/" onClick={handleContactClick}>
            <p>Contact Us</p>
          </NavLink>
        )}
        {responsive && clicked && <h2 onClick={handleCrossClick}>X</h2>}
        {responsive && !clicked && (
          <div onClick={handleHamClick}>
            <Hamburger />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
