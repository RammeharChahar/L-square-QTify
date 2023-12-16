import React from 'react';
import LogoIcon from '../../../assets/logo.svg';
import styles from "./Logo.module.css"

function Logo() {
  return (
    <div className={styles.logoItems}>
        <img src={LogoIcon} className={styles.logoImage}/>
        <p className={styles.musicText}>Q</p>
        <p className={styles.text2}>tify</p>
    </div>
  )
}

export default Logo