import React, { useState } from 'react';
import './style.scss';
import Logo from "../UI/Logo/Logo";

export default function Footer(props) {
    return (
        <div className={'footer'}>
            <Logo/>
            <span>by Asaf Amir</span>
        </div>

    );
}



