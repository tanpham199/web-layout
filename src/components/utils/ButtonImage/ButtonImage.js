import React from 'react';
import styles from './ButtonImage.module.css';

const ButtonImage = ({ src, alt }) => (
    <button type="button" className={styles.ButtonImage}>
        <img src={src} alt={alt} />
    </button>
);

export default ButtonImage;
