import React, { Component } from 'react';
import SectionHeadLine from "../../components/SectionHeadLine/SectionHeadLine";
import { Fade } from "react-reveal";
import './style.scss';

class AboutUs extends Component {

    render() {
        return (
            <div className={'about_us'}>
                <SectionHeadLine
                    elementName={''}
                    text={'About us'}
                    textColor={'white'}
                    color={'gold'}
                    backgroundColorGold={true}
                />
                <div className={'text_wrapper'}>
                    <div className={'about_us_text'}>
                        <Fade>
                            <p><span className={'gold_color'}>CRAFT & MIX</span> is set to give you</p>
                            <p>the best bar and cocktail</p>
                            <p>experience available!</p>
                        </Fade>
                    </div>
                    <div className={'about_us_text'}>
                        <Fade>
                            <p>Our top priority is</p>
                            <p>professional, warm service</p>
                            <p>mixed with</p>
                            <p>mixology creativity</p>
                            <p>and unique cocktails.</p>
                        </Fade>
                    </div>
                    <div className={'about_us_text'}>
                        <Fade>
                            <p>We provide services to</p>
                            <p>private clients,</p>
                            <p>business and corporate events,</p>
                            <p>as well as bars and restaurants.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    };
}

export default AboutUs;




