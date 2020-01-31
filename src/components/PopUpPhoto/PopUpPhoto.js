import React, { Fragment } from 'react';
import { Slide, Zoom } from "react-reveal";
import './style.scss';

export default function Footer(props) {
    const { photoObj } = props;

    return (
        <Fragment>
            <Slide bottom duretion={500}>
                <div className={'photo'}>
                    <img src={photoObj.img} alt={photoObj.text}/>
                </div>
                <div className={`pop_up_text_wrapper`}>
                    <div className={`pop_up_text`}>
                        <div>
                            <i className="fas fa-map-marker-alt"/>
                            <p>{photoObj.event}</p>
                        </div>
                        <Zoom deley={200}><span>{photoObj.text}</span></Zoom>
                    </div>
                    <span className={'close_pop_up'}><i className="far fa-times-circle"/></span>
                </div>
            </Slide>
        </Fragment>
    );
}
