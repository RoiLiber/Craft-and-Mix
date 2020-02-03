import React from 'react';
import logoWhite from '../../assets/icon/Crift&Mix_W.svg';
import logo from '../../assets/icon/Crift & Mix_logo icon.svg';
import Pulse from 'react-reveal/Pulse';
import './style.scss';

export default function EnterPage() {

    return (
        <div className="enter_page_wrapper">
            <div className={'enter_page'}>
                <div className={'pulse_logo'}>
                    <Pulse forever>
                        <img src={logoWhite} alt={'logo'}/>
                    </Pulse>
                </div>
                <p>Cocktail bar service</p>
                <span>and much more</span>
                <span className={'spin_wrapper'}>
                    <div className="spin_box">
                        <img src={logo} alt={'logo'} className={'spin_logo'}/>
                    </div>
                </span>
            </div>
        </div>
    );
}
