import React, { Component } from 'react';
import Section from "../../components/Section";
import './style.scss';
import { Fade } from "react-reveal";
import audi from '../../assest/icon/audi-logo.png';
import google from '../../assest/icon/Google.svg';
import louisVuitton from '../../assest/icon/louisVuitton.png';
import mobileye from '../../assest/icon/mobileye.svg.png';
import milk from '../../assest/icon/m&h.png';
import morris from '../../assest/icon/morris.png';
import greyGoose from '../../assest/icon/greyGoose.png';
import alfa from '../../assest/icon/alfa.png';

class Clients extends Component {

    render() {

        return (
            <Section elementName={'clients'} text={'Some of Our Happy Clients'} textColor={'black'} color={'gold'}>
                <div className={'clients'}>
                    <div className={'icon_wrapper'}>
                        <Fade bottom delay={500}>
                            <span>
                                <img className={'louisVuitton'} src={louisVuitton} alt={'louisVuitton'}/>
                            </span>
                        </Fade>
                        <Fade bottom delay={600}>
                            <span>
                                <img className={'morris'} src={morris} alt={'morris'}/>
                            </span>
                        </Fade>
                        <Fade bottom delay={700}>
                            <span>
                                <img className={'goose'} src={greyGoose} alt={'greyGoose'}/>
                            </span>
                        </Fade>
                        <Fade bottom delay={800}>
                            <span>
                                <img className={'milk'} src={milk} alt={'milk'}/>
                            </span>
                        </Fade>
                        <Fade bottom delay={900}>
                            <span>
                                <img className={'audi'} src={audi} alt={'audi'}/>
                            </span>
                        </Fade>
                        <Fade bottom delay={1000}>
                            <span>
                                <img className={'alfa'} src={alfa} alt={'alfa'}/>
                            </span>
                        </Fade>
                        <Fade bottom delay={1100}>
                            <span>
                                <img className={'mobileye'} src={mobileye} alt={'mobileye'}/>
                            </span>
                        </Fade>
                        <Fade bottom delay={1200}>
                            <span>
                                <img className={'google'} src={google} alt={'google'}/>
                            </span>
                        </Fade>
                    </div>
                </div>
            </Section>
        )
    };
}

export default Clients;




