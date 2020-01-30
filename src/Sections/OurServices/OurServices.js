import React, { Component } from 'react';
import { Fade, Zoom, Slide } from "react-reveal";
import Section from "../../components/Section";
import './style.scss';

class OurServices extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         fill: false
    //     };
    // }

    // fillService = () => {
    //     const { fill } = this.state;
    //     this.setState({ fill: !fill })
    // };

    render() {
        // const { fill } = this.state;

        return (
            <Section elementName={'OurServices'} text={'Our services'} textColor={'black'} color={'gold'}>
                <div className={'services'}>
                    <div className={'service'} onClick={() => this.fillService()}>
                        <Fade bottom delay={300}>
                            <i className="fas fa-glass-martini-alt"/>
                        </Fade>
                        <Fade bottom delay={500}>
                            <p>Bar & Cocktails services</p>
                            <p>for any event</p>
                        </Fade>
                    </div>
                    <div className={'service'}>
                        <Fade bottom delay={600}>
                            <i className="far fa-edit"/>
                        </Fade>
                        <Fade bottom delay={800}>
                            <p>Bar & Cocktail's menu</p>
                            <p>Consultancy services</p>
                        </Fade>
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




