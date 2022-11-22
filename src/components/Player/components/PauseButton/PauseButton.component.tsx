import React from 'react';
import PropTypes from 'prop-types';
import styles from './PauseButton.module.css'
import {
    PauseIcon
  } from "@heroicons/react/20/solid";

interface Props{
    pause:()=>void,


}
const PauseButton =({pause}:Props) => {
    return (

        <button className={styles.button} onClick={()=>pause()}>
            <PauseIcon
            className={styles.icon}
            aria-hidden="true"
            />
         </button>
    )    
    
};

export default PauseButton