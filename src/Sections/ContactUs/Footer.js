import React, { Component } from 'react';
import Section from "../../components/Section";
import { Fade } from "react-reveal";
import Logo from "../../components/UI/Logo/Logo";
import './style.scss';

class Footer extends Component {

    render() {

        return (
            <Section position={'position80'} elementName={'contactUs'} text={'Contact Us'} textColor={'black'} color={'gold'}>
                <div className={'footer_wrapper'}>
                    <div className={'contact_wrapper'}>
                        <p>GET IN TOUCH</p>
                        <div className={'contact'}>
                            <a className={'phone'} href={'tel:0525730004'}>052 5730004</a>
                            <a className={'mail'} href={'mailto:craftandmix@gmail.com'}>craftandmix<span>@</span>gmail.com</a>
                        </div>
                    </div>
                    <div className={'contact_wrapper'}>
                        <p>FOLLOW US</p>
                        <div className={'follow'}>
                            <Fade delay={1500}>
                                <a href={'https://www.instagram.com/craftnmix/'} target={'_blank'}>
                                    <i className="fab fa-instagram"/>
                                </a>
                            </Fade>
                            <Fade delay={1500}>
                                <a href={'https://www.facebook.com/asafamir1'} target={'_blank'}>
                                    <i className="fab fa-facebook-f"/>
                                </a>
                            </Fade>
                        </div>
                    </div>
                    <div className={'footer'}>
                        <Logo backgroundColor={'white'}/>
                        <span>by Asaf Amir</span>
                    </div>
                </div>
            </Section>
        )
    };
}

export default Footer;




