import React, {Component, Fragment} from 'react';
import Section from "../../components/Section";
import './style.scss';
import { Fade } from "react-reveal";

class ContactUs extends Component {

    render() {
        const contact = () => {
            return <Fragment>
                <Fade delay={500}>
                <a href={'https://www.instagram.com/craftnmix/'} target={'_blank'}>
                    <i className="fab fa-instagram"/>
                </a>
                </Fade>
                <Fade delay={500}>
                <a href={'https://www.facebook.com/asafamir1'} target={'_blank'}>
                    <i className="fab fa-facebook-square"/>
                </a>
                </Fade>
                <Fade delay={500}>
                <a href={'#'} target={'_blank'}>
                    <i className="fas fa-phone-square-alt"/>
                </a>
                </Fade>
                <Fade delay={500}>
                <a href={'#'} target={'_blank'}>
                    <i className="far fa-envelope"/>
                </a>
                </Fade>
            </Fragment>
        };

        return (
            <Section position={'position80'} elementName={'contactUs'} text={'Contact Us'} textColor={'black'} color={'gold'}>
                <div className={'contact'}>
                    <div className={'icon_wrapper'}>
                        {contact()}
                    </div>
                </div>
            </Section>
        )
    };
}

export default ContactUs;




