import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlayButton.module.css'
import {
    PlayIcon
  } from "@heroicons/react/20/solid";

interface Props{
    play:()=>void,


}
const Button =({play}:Props) => {
    return (

        <button className={styles.button} onClick={()=>play()}>
            <PlayIcon
            className={styles.icon}
            aria-hidden="true"
            />
         </button>
    )    
    
};

export default Button