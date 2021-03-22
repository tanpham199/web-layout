import React from 'react';
import Row from '../../utils/Row/Row';
import styles from './Features.module.css';
import Feature from './Feature/Feature';

const featureContents = [
    {
        icon: 'infinite-outline',
        title: 'Up to 365 days/year',
        desc:
            "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
    },
    {
        icon: 'stopwatch-outline',
        title: 'Ready in 20 minutes',
        desc:
            "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
    },
    {
        icon: 'nutrition-outline',
        title: '100% organic',
        desc:
            'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!',
    },
    {
        icon: 'cart-outline',
        title: 'Order anything',
        desc:
            "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
    },
];

const Features = () => (
    <section id="features">
        <Row>
            <h2>Get food fast &mdash; not fast food</h2>
            <p className={styles.LongCopy}>
                Hello, we&apos;re Omnifood, your new premium food delivery service. We know
                you&apos;re always busy. No time for cooking. So let us take care of that,
                we&apos;re really good at it, we promise!
            </p>
        </Row>
        <Row>
            {featureContents.map((feature, i) => (
                <Feature key={`feature ${i.toString()}`} {...feature} />
            ))}
        </Row>
    </section>
);

export default Features;
