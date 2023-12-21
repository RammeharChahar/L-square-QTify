import React from 'react';
import styles from "./Section.module.css";
import Button from '@mui/material/Button';
import Card from '../Card/Card';

function Section({title,data,type}) {
  return (
    <div className={styles.albumWrapper}>
        <div className={styles.title}>
            <p className={styles.heading}>{title}</p>
            <Button variant="text" className={styles.button1}>Collapse</Button>
        </div>
        <div className={styles.albumcards}>
        {data.map((item) => <Card data1={item}/>)}
        </div>
    </div>
  )
}

export default Section;