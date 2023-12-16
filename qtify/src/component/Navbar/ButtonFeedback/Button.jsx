import React from 'react';
import styles from "./Button.module.css";

function Button({children}) {
  return (
    <div>
    <button className={styles.feedbackBtn}>{children}</button>
    </div>
  )
}

export default Button