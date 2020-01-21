import React, { useState } from 'react';
import './style.scss';
import Logo from "../UI/Logo/Logo";

export default function Footer(props) {
    return (
        <div className={'footer'}>
            <Logo backgroundColor={'white'}/>
            <span>by Asaf Amir</span>
        </div>
    );
}



