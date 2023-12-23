import React from "react";
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';

function Card({data1,type}) {
  if(type==="album"){
    return (
      <div className={styles.wrapperCard}>
        <div className={styles.cardTop}>
          <div className={styles.cardImage}>
          <img
            src={data1.image}
            alt=""
            className={styles.image}
          />
          </div>
          <div className={styles.chipDiv}>
          <Chip label={`${data1.follows} Follows`} size="small" className={styles.chip}/>
          </div>
        </div>
        <div className={styles.cardBottom}>
        <p className={styles.title}>{data1.title}</p>
        </div>
      </div>
    );
  }else{
    return (
      <div className={styles.wrapperCard1}>
        <div className={styles.cardTop}>
          <div className={styles.cardImage}>
          <img
            src={data1.image}
            alt=""
            className={styles.image}
          />
          </div>
          <div className={styles.chipDiv}>
          <Chip label={`${data1.likes} Likes`} size="small" className={styles.chip}/>
          </div>
        </div>
        <div className={styles.cardBottom1}>
        <p className={styles.title1}>{data1.title}</p>
        </div>
      </div>
    );
  }
}

export default Card;
