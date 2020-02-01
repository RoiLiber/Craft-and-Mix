import React, { Component } from 'react';
import { Fade } from "react-reveal";
import Section from "../../components/Section";
import cocktailIcon from '../../assets/icon/cocktail-icon.png';
import menuIcon from '../../assets/icon/menu-icon.png';
import './style.scss';

class OurServices extends Component {
    render() {
        return (
            <Section elementName={'ourServices'} text={'Our services'} textColor={'black'} color={'gold'}>
                <div className={'services'}>
                    <div className={'service'}>
                        <div className={'wrap_service'}>
                            <Fade bottom delay={300}>
                                <img src={cocktailIcon} alt={'icon'}/>
                            </Fade>
                        </div>
                        <div className={'wrap_service'}>
                            <Fade bottom delay={500}>
                                <p>Bar & Cocktails services</p>
                                <p>for any event</p>
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
                            <Fade bottom delay={800}>
                                <p>Bar & Cocktail's menu</p>
                                <p>Consultancy services</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Section>
        )
    };
}

export default OurServices;




