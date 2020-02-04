import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import backPhoto from '../../assets/img/background/Crift&Mix-pattern.png';
import './style.scss';

export default function ParallaxPattern() {

    return (
        <div className={'parallax_pattern_wrapper'}>
            <ParallaxBanner
                className={'parallax_pattern'}
                layers={[
                    {
                        image: backPhoto,
                        amount: 0.5,
                    }
                ]}
            />
        </div>
    );
}
