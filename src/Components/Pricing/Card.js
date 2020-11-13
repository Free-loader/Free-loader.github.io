import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './Card.module.css';

function Card({ props }) {
  const { Icon, iconName, name, data, desc, awards, percent, pals, prc, handleContactClick } = props;

  const getLife = () => {
    const width = window.innerWidth;
    const widthMax = width > 456 ? 220 : 90;
    return {
      '--length': `${Math.round((percent / 100) * widthMax)}px`
    };
  };

  return (
    <div>
      <div className={styles['card']} style={getLife()}>
        <div className={styles['additional']}>
          <div className={styles['user-card']}>
            <div className={cx(styles.level, styles.center)}>{iconName}</div>
            <Icon className={styles['icons1']} />
            <div className={styles['circle']}>
              <svg>
                <circle className={styles['stroke']} cx="60" cy="60" r="55" />
              </svg>
            </div>
            <NavLink to="/" style={{ textDecoration: 'none' }} onClick={handleContactClick}>
              <div>
                <div className={styles['svg-wrapper']}>
                  <svg height="30" width="120">
                    <rect className={styles['shape']} height="30" width="120" />
                  </svg>
                </div>
                <div className={styles['text']}>CONTACT US</div>
              </div>
            </NavLink>
          </div>
          <div className={styles['more-info']}>
            <h1>{name}</h1>
            <div className={styles['coords']}>
              {data.map((e, i) => {
                return (
                  <>
                    <span key={i}>{e}</span>
                    <br />
                  </>
                );
              })}
            </div>
            <div className={styles['bar']}>
              <div className={styles['emptybar']}>
                <p>a</p>
              </div>
              <div className={styles['filledbar']}></div>
            </div>
            <div className={styles['prc']}>
              <div className={styles['prc1']}>{prc}</div>
            </div>
            <div className={styles['stats']}>
              <div>
                <div className={styles['title']}>Projects</div>
                <i className={styles['fa fa-trophy']}></i>
                <div className={styles['value']}>{awards}</div>
              </div>
              {/* <div>
                <div className={styles['title']}></div>
                <i className={styles['fa fa-gamepad']}></i>
                <div className={styles['value']}>{matches}</div>
              </div> */}
              <div>
                <div className={styles['title']}>Clients</div>
                <i className={styles['fa fa-group']}></i>
                <div className={styles['value']}>{pals}</div>
              </div>
              <div>
                <div className={styles['title']}>Satisfaction</div>
                <i className={styles['fa fa-coffee']}></i>
                <div className={cx(styles.value, styles.infinity)}>∞</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['general']}>
          <h1>{name}</h1>
          <p>{desc}</p>
          <span className={styles['more']}>Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
