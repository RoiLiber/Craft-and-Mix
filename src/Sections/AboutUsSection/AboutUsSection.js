import React, { Component } from 'react';
import SectionHeadLine from "../../components/SectionHeadLine";
import { Events, animateScroll as scroll, scrollSpy, } from 'react-scroll';
import { Element } from 'react-scroll';
import {Fade, Flip, Zoom} from "react-reveal";
import './style.scss';

class AboutUsSection extends Component {

    componentDidMount = () => {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    };
    componentWillUnmount = () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };

    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };
    // scrollToBottom = () => {
    //     scroll.scrollToBottom();
    // };
    // scrollMore = more => {
    //     scroll.scrollMore(more);
    // };
    // handleSetActive = to => {
    //     console.log(to);
    // };

    scrollTo = to => {
        scroll.scrollTo(to);
    };

    render() {
        return (
            <Element name="about_section" className="about_section">
                <div className={'about_us'}>
                    <SectionHeadLine
                        scrollTo={this.scrollTo}
                        scroll={680}
                        text={'About us'}
                        textColor={'black'}
                        arrowColor={'gold'}
                        lineColor={'gold'}
                    />
                    <div className={'text'}>
                        <div>
                            <p>Created by <span className={'gold_color'}>Asaf Amir</span>,</p>
                            <p><span className={'gold_color'}>CRAFT & MIX</span> is set to give you</p>
                            <p>the best cocktail and bar</p>
                            <p>experience you can get!</p>
                        </div>
                        <div>
                            <p>Our top priority is</p>
                            <p>professional and kind service</p>
                            <p>next to deep</p>
                            <p>mixology creativity</p>
                            <p>and fancy cocktails.</p>
                        </div>
                        <div>
                            <p>We give services to</p>
                            <p>private clients,</p>
                            <p> business companies,</p>
                            <p> bars and restaurants.</p>
                        </div>
                    </div>
                    <SectionHeadLine
                        scrollTo={this.scrollTo}
                        scroll={980}
                        text={'Our services'}
                        textColor={'black'}
                        arrowColor={'gold'}
                        lineColor={'gold'}
                    />
                    <div className={'services'}>
                        <div className={'service'}>
                            <Fade top delay={500}>
                                <i className="fas fa-glass-martini-alt"/>
                            </Fade>
                            <Zoom cascade>
                                <p>Bar and cocktails services for any event</p>
                            </Zoom>
                        </div>
                        <div className={'service'}>
                            <Fade top={800} delay={900}>
                                <i className="fab fa-elementor"/>
                            </Fade>
                            <Zoom cascade>
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
                    <SectionHeadLine
                        scrollTo={this.scrollTo}
                        scroll={1000}
                        text={'Mood'}
                        textColor={'black'}
                        arrowColor={'gold'}
                        lineColor={'gold'}
                    />
                </div>
            </Element>
        )
    };
}

export default AboutUsSection;




