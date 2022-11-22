import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css'

interface Props{
    progress:number,
}
const ProgressBar =({progress}:Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.progress} style={{width:progress*100+'%'}}>

            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    
};

export default ProgressBar;