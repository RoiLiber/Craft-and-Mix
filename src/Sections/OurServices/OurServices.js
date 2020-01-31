import React, { Component } from 'react';
import { Fade } from "react-reveal";
import Section from "../../components/Section";
import cocktailIcon from '../../assest/icon/cocktail-icon.png';
import menuIcon from '../../assest/icon/menu-icon.png';
import './style.scss';

class OurServices extends Component {

    render() {

        return (
            <Section elementName={'OurServices'} text={'Our services'} textColor={'black'} color={'gold'}>
                <div className={'services'}>
                    <div className={'service'}>
                        <Fade bottom delay={300}>
                            <img src={cocktailIcon} alt={'icon'}/>
                            {/*<i className="fas fa-glass-martini-alt"/>*/}
                        </Fade>
                        <Fade bottom delay={500}>
                            <p>Bar & Cocktails services</p>
                            <p>for any event</p>
                        </Fade>
                    </div>
                    <div className={'service'}>
                        <Fade bottom delay={600}>
                            <img src={menuIcon} alt={'icon'}/>
                            {/*<i className="far fa-edit"/>*/}
                        </Fade>
                        <Fade bottom delay={800}>
                            <p>Bar & Cocktail's menu</p>
                            <p>Consultancy services</p>
                        </Fade>
                    </div>
                </div>
            </Section>
        )
    };
}

export default OurServices;




