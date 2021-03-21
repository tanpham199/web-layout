import React from 'react';
import styles from './Button.module.css';

const ButtonFull = ({ href, type, children }) => {
    const classes =
        type === 'full'
            ? [styles.Button, styles.ButtonFull].join(' ')
            : [styles.Button, styles.ButtonGhost].join(' ');
    return (
        <a href={href} className={classes}>
            {children}
        </a>
    );
};

export default ButtonFull;
