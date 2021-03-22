import React from 'react';
import meal1 from './MealPhotos/1.jpg';
import meal2 from './MealPhotos/2.jpg';
import meal3 from './MealPhotos/3.jpg';
import meal4 from './MealPhotos/4.jpg';
import meal5 from './MealPhotos/5.jpg';
import meal6 from './MealPhotos/6.jpg';
import meal7 from './MealPhotos/7.jpg';
import meal8 from './MealPhotos/8.jpg';
import styles from './Meals.module.css';
import Meal from './Meal/Meal';

const Meals = () => {
    const firstMealsContent = [
        {
            src: meal1,
            alt: 'Korean bibimbap with egg and vegetables',
        },
        {
            src: meal2,
            alt: 'Simple italian pizza with cherry tomatoes',
        },
        {
            src: meal3,
            alt: 'Chicken breast steak with vegetables',
        },
        {
            src: meal4,
            alt: 'Autumn pumpkin soup',
        },
    ];
    const secondMealsContent = [
        {
            src: meal5,
            alt: 'Paleo beef steak with vegetables',
        },
        {
            src: meal6,
            alt: 'Healthy baguette with egg and vegetables',
        },
        {
            src: meal7,
            alt: 'Burger with cheddar and bacon',
        },
        {
            src: meal8,
            alt: 'Granola with cherries and strawberries',
        },
    ];
    return (
        <section className={styles.Meals}>
            <ul className={`clearfix ${styles.MealsShowcase}`}>
                {firstMealsContent.map((meal, i) => (
                    <Meal key={`firstMeals ${i.toString()}`} {...meal} />
                ))}
            </ul>
            <ul className={`clearfix ${styles.MealsShowcase}`}>
                {secondMealsContent.map((meal, i) => (
                    <Meal key={`secondMeals ${i.toString()}`} {...meal} />
                ))}
            </ul>
        </section>
    );
};

export default Meals;
