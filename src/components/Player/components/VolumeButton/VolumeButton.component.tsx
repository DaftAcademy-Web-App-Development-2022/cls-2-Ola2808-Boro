import React from 'react';
import PropTypes from 'prop-types';
import styles from './VolumeButton.module.css'
import {
    SpeakerWaveIcon
  } from "@heroicons/react/20/solid";
  
interface Props{
   

}
const VolumeButton =({}:Props) => {
    return (

        <button className={styles.button}>
            <SpeakerWaveIcon
            className={styles.icon}
            aria-hidden="true"
            />
         </button>
    )    
    
};

export default VolumeButton