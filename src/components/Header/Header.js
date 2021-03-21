import React from 'react';
import NavBar from './Navigation/NavBar/NavBar';
import styles from './Header.module.css';
import Button from '../Button/Button';

const Header = () => {
    return (
        <header id="header" className={styles.Header}>
            <NavBar />
            <div className={styles.HeroTextBox}>
                <h1>
                    Goodbye junk food.
                    <br />
                    Hello super healthy meals.
                </h1>
                <Button href="#plans" type="full">
                    I'm hungry
                </Button>
                <Button href="#features" type="ghost">
                    Show me more
                </Button>
            </div>
        </header>
    );
};

export default Header;
