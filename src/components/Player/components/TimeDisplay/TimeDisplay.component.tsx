import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimeDisplay.module.css'


interface Props{
    currentTime:number,
    duration:number,
}


const TimeDisplay = ({currentTime,duration}:Props) => {
    const formattedCurrentTime =  countTime(currentTime);
    const formattedDuration =  countTime(duration);

    return (
        <p className={styles.text}>
            {
                `${formattedCurrentTime}/${formattedDuration}`
            }

        </p>
    );
};

function countTime(e: number) {
    const m = Math.floor(e % 3600 / 60).toString().padStart(2, '0')
    const s = Math.floor(e % 60).toString().padStart(2, '0');
  
    return m + ':' + s;
  }
  
export default TimeDisplay