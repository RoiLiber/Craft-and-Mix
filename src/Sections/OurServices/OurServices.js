import React, { Component } from 'react';
import { Fade } from "react-reveal";
import Section from "../../components/Section";
import cocktailIcon from '../../assets/icon/site-icons/cocktail-icon.png';
import menuIcon from '../../assets/icon/site-icons/menu-icon.png';
// import VisibilitySensor from "react-visibility-sensor/visibility-sensor";
import './style.scss';

class OurServices extends Component {

    render() {
        return (
            <Section elementName={'ourServices'} text={'Our services'} textColor={'black'} color={'gold'}>
                <div className={'services'}>
                    <div className={'service'}>
                        <div className={'wrap_service'}>
                            <Fade bottom whem delay={300}>
                                <img src={cocktailIcon} alt={'icon'}/>
                            </Fade>
                        </div>
                        <div className={'wrap_service'}>
                            <Fade cascade bottom delay={500}>
                                <p>Bar & Cocktails Services</p>
                                <p>For Any Event</p>
                            </Fade>
                        </div>
                    </div>
                    <div className={'service'}>
                        <div className={'wrap_service'}>
                            <Fade bottom delay={600}>
                                <img src={menuIcon} alt={'icon'}/>
                            </Fade>
                        </div>
                        <div className={'wrap_service'}>
                            <Fade cascade bottom delay={800}>
                                <p>Bar & Cocktail Menu Creating</p>
                                <p>Consultancy Services</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Section>
        )
    };
}

export default OurServices;




