import React from 'react';
import styles from './NavItem.module.css';

const NavItem = ({ href, children }) => (
    <li className={styles.NavItem}>
        <a href={href}>{children}</a>
    </li>
);

export default NavItem;
