import React, { Component } from 'react';
import Section from "../../components/Section";
import './style.scss';
import { Fade } from "react-reveal";

class Customers extends Component {

    render() {

        return (
            <Section position={'position70'} elementName={'someHappyCustomers'} text={'Some happy Customers'} textColor={'black'} color={'gold'}>
                <div className={'Customers'}>
                    <div className={'icon_wrapper'}>
                        <Fade delay={500}>
                            <i className="fab fa-google-plus"/>
                        </Fade>
                        <Fade delay={600}>
                            <span>
                                <i className="far fa-circle one"/>
                                <i className="far fa-circle two"/>
                                <i className="far fa-circle three"/>
                                <i className="far fa-circle four"/>
                            </span>
                        </Fade>
                    </div>
                </div>
            </Section>
        )
    };
}

export default Customers;




