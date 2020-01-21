import React from 'react';
import './style.scss';
import Zoom from "react-reveal";

export default function Footer(props) {
    const { photo, onClick } = props;

    return (
        <div className={'pop_up_wrapper'} onClick={() => onClick(photo)}>
            <Zoom cascade delay={500}>
                <div className={'photo'}>
                    <img src={photo} alt={'photo'}/>
                </div>
            </Zoom>
        </div>
    );
}
