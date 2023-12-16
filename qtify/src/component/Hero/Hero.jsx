import React from 'react';
import styles from "./Hero.module.css";
import HeroImage from "../../assets/HeroImage1.svg";

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={HeroImage} alt=''/>
        </div>
    </div>
  )
}
