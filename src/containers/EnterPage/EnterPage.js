import React from 'react';
import logoWhite from '../../assets/icon/Crift&Mix_W.svg';
import logo from '../../assets/icon/Crift & Mix_logo icon.svg';
import './style.scss';

export default function EnterPage() {

    return (
        <div className="enter_page_wrapper">
            <div className={'enter_page'}>
                <div className={'enter_page_logo_img'}>
                    <img src={logoWhite} alt={'logo'}/>
                </div>
                <div className={'enter_page_spin_logo'}>
                    <div className="logo_box">
                        <img src={logo} alt={'logo'} className={'hourglass'}/>
                    </div>
                </div>
                <p>Cocktail bar service</p>
                <p>and much more</p>
            </div>
        </div>
    );
}
