import React from 'react';
import styles from './Step.module.css';

const Step = ({ number, detail }) => (
    <div className={styles.WorksStep}>
        <div>{number}</div>
        <p>{detail}</p>
    </div>
);

export default Step;
