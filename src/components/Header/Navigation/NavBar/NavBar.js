import React from 'react';
import NavItem from '../NavItem/NavItem';
import styles from './NavBar.module.css';
import logoWhite from './logo-white.png';

const navItemContent = [
    {
        href: '#features',
        text: 'Food delivery',
    },
    {
        href: '#works',
        text: 'How it works',
    },
    {
        href: '#cities',
        text: 'Our cities',
    },
    {
        href: '#plans',
        text: 'Sign up',
    },
];

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <img src={logoWhite} alt="Omnifood logo" className={styles.Logo} />
            <a href="#header">
                <img src="public/" alt="Omnifood logo" className={styles.LogoBlack} />
            </a>
            <ul className={styles.NavMenu}>
                {navItemContent.map((content, i) => (
                    <NavItem href={content.href}>{content.text}</NavItem>
                ))}
            </ul>
            <a class={styles.MobileNavBarIcon} href>
                <i className="ion-navicon-round"></i>
            </a>
        </nav>
    );
};

export default NavBar;
