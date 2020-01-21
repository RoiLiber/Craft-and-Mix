import React from 'react';
import logo from '../../../assest/img/logos/A.jpeg';
import gold from '../../../assest/img/logos/gold.PNG';
import './style.scss';

export default function Logo(props) {
    const { backgroundColor } = props;

    return (
        <div className={'logo'}>
            <div className={'cr'}>
                <span>CR</span>
                <img alt={'logo'} src={backgroundColor ? gold : logo}/>
                <span>FT</span>
            </div>
            <span className={'and'}>&</span>
            <span>MIX</span>
        </div>
    );
}
