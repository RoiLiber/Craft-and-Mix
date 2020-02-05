import React from 'react';
import { Slide, Zoom } from "react-reveal";
import './style.scss';

export default function PopUpPhoto(props) {
    const { photosObj } = props;

    return <div className={'pop_photos_wrapper'}>
        {photosObj.photos.map((photo, index) => {
            return <Slide bottom duretion={500} key={index}>
                <div className={'photo'}>
                    <img src={photo} alt={`photo${index}`}/>
                </div>
                <div className={`pop_up_text_wrapper`}>
                    <Zoom deley={200}>
                        <div className={`pop_up_text`}>
                            <i className="fas fa-map-marker-alt"/>
                            <p>{photosObj.location}</p>
                        </div>
                    </Zoom>
                    <span className={'close_pop_up'}><i className="far fa-times-circle"/></span>
                </div>
            </Slide>
        })}
    </div>
}
