import React, { Component } from 'react';
import Section from "../../components/Section";
import './style.scss';
import { Fade } from "react-reveal";
import audi from '../../assest/img/logos/Untitled.png';
import google from '../../assest/img/logos/google.png';
import mobilaye from '../../assest/img/logos/mobilp.png';

class Clients extends Component {

    render() {

        return (
            <Section elementName={'clients'} text={'Some of Our Happy Clients'} textColor={'black'} color={'gold'}>
                <div className={'clients'}>
                    <div className={'icon_wrapper'}>
                        <Fade delay={500}>
                            <span>
                                <img className={'mobilaye'} src={mobilaye} alt={'audi logo'}/>
                            </span>
                        </Fade>
                        <Fade delay={700}>
                            <span>
                                <img src={audi} alt={'audi logo'}/>
                            </span>
                        </Fade>
                        <Fade delay={900}>
                            <span>
                                <img className={'google'} src={google} alt={'audi logo'}/>
                            </span>
                        </Fade>
                    </div>
                </div>
            </Section>
        )
    };
}

export default Clients;




