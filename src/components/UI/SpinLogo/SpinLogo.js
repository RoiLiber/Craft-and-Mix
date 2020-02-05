import React from 'react';
import logo from "../../../assets/icon/logos/Crift & Mix_logo icon.svg";
import './style.scss';

export default function SpinLogo() {

    return <div className={'spin_wrapper'}>
        <div className="box">
            <img src={logo} alt={`logo`} className={'hourglass'}/>
        </div>
        <p>Cocktail bar service</p>
        <span>and much more</span>
    </div>
}
