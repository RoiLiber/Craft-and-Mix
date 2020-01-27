import React, { Component } from 'react';
import { Fade, Zoom } from "react-reveal";
import Section from "../../components/Section";
import './style.scss';

class OurServices extends Component {

    render() {
        return (
            <Section elementName={'OurServices'} text={'Our services'} textColor={'black'} color={'gold'}>
                <div className={'services'}>
                    <div className={'service'}>
                        <Fade delay={300}>
                            <i className="fas fa-glass-martini-alt"/>
                        </Fade>
                        <Zoom cascade delay={500}>
                            <p>Bar & Cocktails services</p>
                            <p>for any event</p>
                        </Zoom>
                    </div>
                    <div className={'service'}>
                        <Fade delay={600}>
                            <i className="far fa-edit"/>
                        </Fade>
                        <Zoom cascade delay={800}>
                            <p>Bar & Cocktail's menu</p>
                            <p>Consultancy services</p>
                        </Zoom>
                    </div>
                    {/*<div className={'service'}>*/}
                    {/*    <Flip>*/}
                    {/*        <i className="fas fa-wine-bottle"/>*/}
                    {/*    </Flip>*/}
                    {/*    <p>Pre mixed and ready to served craft cocktails in bottled</p>*/}
                    {/*</div>*/}
                </div>
            </Section>
        )
    };
}

export default OurServices;




