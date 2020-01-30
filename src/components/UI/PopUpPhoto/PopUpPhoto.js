import React, { Fragment } from 'react';
import './style.scss';
import Zoom from "react-reveal";

export default function Footer(props) {
    const { photo } = props;

    return (
        <Fragment>
            <i className="far fa-times-circle"/>
            <Zoom cascade delay={500}>
                <div className={'photo'}>
                    <img src={photo} alt={'photo'}/>
                </div>
            </Zoom>
        </Fragment>
    );
}
