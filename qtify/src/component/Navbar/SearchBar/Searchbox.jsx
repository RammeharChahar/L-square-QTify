import React from 'react';
import styles from "./Searchbox.module.css";
import {ReactComponent as SearchIcon} from "../../../assets/search-icon.svg";

function Searchbox({placeholder}) {
    const handleSubmit = (e) =>{
       e.preventDefault();
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className={styles.inputBox}>
   <input type="search" placeholder={placeholder} className={styles.textField}/>
   <button type="submit" className={styles.icon}><SearchIcon /></button>
    </form>
    </div>
  )
}

export default Searchbox;