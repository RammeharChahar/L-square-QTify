import React, { useState } from 'react';
import styles from "./Section.module.css";
import Button from '@mui/material/Button';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';

function Section({title,data,type}) {
   const [toggleBtn,setToggleBtn] = useState(false);
   const [toggleText,setToggleText] = useState('Show All');

   const handleToggle = () =>{
    if(toggleBtn){
      setToggleText('Show All');
    }else{
      setToggleText('Collapse');
    }
    setToggleBtn(!toggleBtn);
   }

  return (
    <div className={styles.albumWrapper}>
    <div className={styles.title}>
        <p className={styles.heading}>{title}</p>
        <Button variant="text" className={styles.button1} onClick={handleToggle}>{toggleText}</Button>
    </div>
    <div className={styles.albumcards}>
     { toggleBtn ?  data.map((item) => <Card data1={item}/>) 
       : <Carousel data2={data}/>}
    </div>
</div>
  )
}

export default Section;