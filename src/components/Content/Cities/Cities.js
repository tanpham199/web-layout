import React from 'react';
import Row from '../../utils/Row/Row';
import lisbon from './CitiesPhotos/lisbon-3.jpg';
import berlin from './CitiesPhotos/berlin.jpg';
import london from './CitiesPhotos/london.jpg';
import sanFrancisco from './CitiesPhotos/san-francisco.jpg';
import City from './City/City';

const Cities = () => {
    const citiesContent = [
        {
            src: lisbon,
            alt: 'Lisbon',
            title: 'Lisbon',
            detail: ['1600+ happy eaters', '60+ top chefs', '@omnifood_lx'],
        },
        {
            src: sanFrancisco,
            alt: 'San Francisco',
            title: 'San Francisco',
            detail: ['3700+ happy eaters', '160+ top chefs', '@omnifood_sf'],
        },
        {
            src: berlin,
            alt: 'Berlin',
            title: 'Berlin',
            detail: ['2300+ happy eaters', '110+ top chefs', '@omnifood_berlin'],
        },
        {
            src: london,
            alt: 'London',
            title: 'London',
            detail: ['1200+ happy eaters', '50+ top chefs', '@omnifood_london'],
        },
    ];
    return (
        <section id="cities">
            <Row>
                <h2>We&apos;re currently in these cities</h2>
            </Row>
            <Row>
                {citiesContent.map((city, i) => (
                    <City key={`city ${i.toString()}`} {...city} />
                ))}
            </Row>
        </section>
    );
};

export default Cities;
