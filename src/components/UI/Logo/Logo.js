import React from 'react';
import logo from '../../../assest/img/logos/gold.PNG';
import './style.scss';

export default function Logo(props) {
    return (
        <div className={'logo'}>
            <div className={'cr'}>
                <span>CR</span>
                <img src={logo}/>
                <span>FT</span>
            </div>
            <span className={'and'}>&</span>
            <span>MIX</span>
        </div>
    );
}
