import React from 'react';
import styles from './City.module.css';

const City = ({ src, alt, title, detail }) => (
    <div className="col span-1-of-4 box">
        <img src={src} alt={alt} />
        <h3>{title}</h3>
        <div className={styles.CityFeature}>
            <ion-icon name="person" class={styles.IconSmall} />
            {detail[0]}
        </div>
        <div className={styles.CityFeature}>
            <ion-icon name="star" class={styles.IconSmall} />
            {detail[1]}
        </div>
        <div className={styles.CityFeature}>
            <ion-icon
                name="logo-twitter"
                class={`${styles.IconSmall} ${styles.IconSmallTwitter}`}
            />
            <a href="/">{detail[2]}</a>
        </div>
    </div>
);

export default City;
