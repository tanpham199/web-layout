import React from 'react';
import Row from '../../utils/Row/Row';
import styles from './Steps.module.css';
import iphone from './StepsPhotos/app-iPhone.png';
import Step from './Step/Step';
import ButtonImage from '../../utils/ButtonImage/ButtonImage';
import androidButton from './StepsPhotos/download-app-android.png';
import iosButton from './StepsPhotos/download-app.svg';

const Steps = () => {
    const stepsContent = [
        'Choose the subscription plan that best fits your needs and sign up today.',
        'Order your delicious meal using our mobile app or website. Or you can even call us!',
        'Enjoy your meal after less than 20 minutes. See you the next time!',
    ];
    return (
        <section id="works" className={styles.Steps}>
            <Row>
                <h2>How it works &mdash; Simple as 1, 2, 3</h2>
            </Row>
            <Row>
                <div className={`col span-1-of-2 ${styles.StepsBox}`}>
                    <img src={iphone} alt="Omnifood app on iPhone" className={styles.AppScreen} />
                </div>
                <div className={`col span-1-of-2 ${styles.StepsBox}`}>
                    {stepsContent.map((step, i) => (
                        <Step key={`step ${i.toString()}`} number={i + 1} detail={step} />
                    ))}
                    <ButtonImage src={iosButton} alt="App Store Button" />
                    <ButtonImage src={androidButton} alt="Play Store Button" />
                </div>
            </Row>
        </section>
    );
};

export default Steps;
