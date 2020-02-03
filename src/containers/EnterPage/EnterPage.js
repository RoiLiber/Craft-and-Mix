import React from 'react';
import logoWhite from '../../assets/icon/Crift&Mix_W.svg';
import logo from '../../assets/icon/Crift & Mix_logo icon.svg';
import Pulse from 'react-reveal/Pulse';
import './style.scss';
import SpinLogo from "../../components/UI/SpinLogo";

export default function EnterPage() {

    return (
        <div className="enter_page_wrapper">
            <SpinLogo/>
        </div>
    );
}
