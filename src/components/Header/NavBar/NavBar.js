import React, { useState } from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavBar.module.css';
import logoWhite from './logo-white.png';
import logo from './logo.png';
import Row from '../../utils/Row/Row';

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

const NavBar = ({ sticky }) => {
    const navClass = sticky ? styles.Sticky : '';
    const [visible, setVisible] = useState(false);
    const onToggleNavItems = () => {
        setVisible(!visible);
    };
    const navMenuClass = visible ? `${styles.NavMenu} ${styles.Show}` : styles.NavMenu;
    return (
        <nav className={navClass}>
            <Row>
                <img src={logoWhite} alt="Omnifood logo" className={styles.Logo} />
                <a href="#header">
                    <img src={logo} alt="Omnifood logo" className={styles.LogoBlack} />
                </a>
                <ul className={navMenuClass}>
                    {navItemContent.map((content, i) => (
                        <NavItem key={`navItem ${i.toString()}`} href={content.href}>
                            {content.text}
                        </NavItem>
                    ))}
                </ul>
                <button
                    className={styles.MobileNavBarIcon}
                    type="button"
                    onClick={onToggleNavItems}
                >
                    {visible ? <ion-icon name="close-outline" /> : <ion-icon name="menu-outline" />}
                </button>
            </Row>
        </nav>
    );
};

export default NavBar;
