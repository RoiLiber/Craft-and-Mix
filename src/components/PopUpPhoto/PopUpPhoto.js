import React from 'react';
import { Slide, Zoom } from "react-reveal";
import './style.scss';

export default function Footer(props) {
    const { photosObj } = props;

    return <div className={'pop_photos_wrapper'}>
        {photosObj.photos.map((photo, index) => {
            return <Slide bottom duretion={500}>
                <div className={'photo'}>
                    <img src={photo.img} alt={`photo${index}`}/>
                </div>
                <div className={`pop_up_text_wrapper`}>
                    <div className={`pop_up_text`}>
                        <div>
                            <i className="fas fa-map-marker-alt"/>
                            <p>{photosObj.location}</p>
                        </div>
                        <Zoom deley={200}><span>{photo.text}</span></Zoom>
                    </div>
                    <span className={'close_pop_up'}><i className="far fa-times-circle"/></span>
                </div>
            </Slide>
        })}
    </div>
}
