import React, { Component } from 'react';
import './style.scss';
import SectionHeadLine from "../../components/SectionHeadLine/SectionHeadLine";

class AboutUs extends Component {

    render() {
        return (
            <div className={'about_us'}>
                <SectionHeadLine
                    to={null}
                    text={'About us'}
                    textColor={'white'}
                    color={'gold'}
                    backgroundColorGold={true}
                />
                <div className={'text_wrapper'}>
                    <div className={'about_us_text'}>
                        <p>Created by <span className={'gold_color'}>Asaf Amir</span>,</p>
                        <p><span className={'gold_color'}>CRAFT & MIX</span> is set to give you</p>
                        <p>the best cocktail and bar</p>
                        <p>experience you can get!</p>
                    </div>
                    <div className={'about_us_text'}>
                        <p>Our top priority is</p>
                        <p>professional and kind service</p>
                        <p>next to deep</p>
                        <p>mixology creativity</p>
                        <p>and fancy cocktails.</p>
                    </div>
                    <div className={'about_us_text'}>
                        <p>We give services to</p>
                        <p>private clients,</p>
                        <p> business companies,</p>
                        <p> bars and restaurants.</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default AboutUs;




