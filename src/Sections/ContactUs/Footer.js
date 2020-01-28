import React from 'react';
import Section from "../../components/Section";
import { Fade } from "react-reveal";
import Logo from "../../components/UI/Logo/Logo";
import { useSpring, animated } from 'react-spring';
import logo from '../../assest/icon/Crift&Mix-black logo.svg';
import './style.scss';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Footer() {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <Section elementName={'contactUs'} text={'Contact Us'} textColor={'black'} color={'gold'} noHeadLine>
            <div className={'footer_wrapper'}>
                <div className={'stars_wrapper'}>
                    <div id='stars'/>
                    <div id='stars2'/>
                    <div id='stars3'/>
                </div>
                <div className={'contact_wrapper'}>
                    <p>GET IN TOUCH</p>
                    <div className={'contact'}>
                            <span className={'phone_number'}>
                                <a className={'phone'} href={'tel:0525730004'}>052 5730004</a>
                                <a className={'sms'} href={'sms:0525730004'}><i className="far fa-comment"/></a>
                            </span>
                        <a className={'mail'} href={'mailto:craftandmix@gmail.com'}>craftandmix<span>@</span>gmail.com</a>
                    </div>
                </div>
                <div className={'contact_wrapper'}>
                    <p>FOLLOW US</p>
                    <div className={'follow'}>
                        <animated.div
                            className="card"
                            onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                            onMouseLeave={() => set({xys: [0, 0, 1]})}
                            style={{transform: props.xys.interpolate(trans)}}
                        >
                            <Fade delay={500}>
                                <a className={'instagram'} href={'https://www.instagram.com/craftnmix/'} target={'_blank'}>
                                    <i className="fab fa-instagram"/>
                                </a>
                            </Fade>
                        </animated.div>
                        <animated.div
                            className="card"
                            onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                            onMouseLeave={() => set({xys: [0, 0, 1]})}
                            style={{transform: props.xys.interpolate(trans)}}
                        >
                            <Fade delay={700}>
                                <a className={'facebook'} href={'https://www.facebook.com/asafamir1'} target={'_blank'}>
                                    <i className="fab fa-facebook-f"/>
                                </a>
                            </Fade>
                        </animated.div>
                    </div>
                </div>
                <div className={'footer'}>
                    {/*<Logo backgroundColor={'white'}/>*/}
                    <img src={logo} alt={'logo'}/>
                </div>
            </div>
        </Section>
    );
}




