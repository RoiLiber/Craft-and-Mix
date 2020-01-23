import React, { Component } from 'react';
import { Flip, Zoom } from "react-reveal";
import Section from "../../components/Section";
import './style.scss';

class OurServices extends Component {

    render() {
        return (
            <Section elementName={'OurServices'} text={'Our services'} textColor={'black'} color={'gold'}>
                <div className={'services'}>
                    <div className={'service'}>
                        <Flip delay={500}>
                            <i className="fas fa-glass-martini-alt"/>
                        </Flip>
                        <Zoom cascade delay={500}>
                            <p>Bar and cocktails services for any event</p>
                        </Zoom>
                    </div>
                    <div className={'service'}>
                        <Flip delay={900}>
                            <i className="fab fa-elementor"/>
                        </Flip>
                        <Zoom cascade delay={900}>
                            <p>Bars advice and cocktail's menu build</p>
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




