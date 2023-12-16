import React from 'react';
import styles from "./Navbar.module.css"
import Logo from './Logo/Logo';
import Searchbox from './SearchBar/Searchbox';
import Button from './ButtonFeedback/Button';

function Navbar() {
  return (
    <div className={styles.navbar}>
     <Logo/>
     <Searchbox placeholder={"Search a song of your choice"}/>
     <Button>Give Feedback</Button>
    </div>
  )
}

export default Navbar;