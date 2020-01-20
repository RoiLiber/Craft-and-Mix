import React, { Component } from 'react';
import './style.scss';

class ContactUsSection extends Component {

    render() {
        return (
            <div className={'contact_us_section'}>
                <a href={'https://www.instagram.com/craftnmix/'} target={'_blank'}>
                    <i className="fab fa-instagram"/>
                </a>
                <a href={'https://www.facebook.com/asafamir1'} target={'_blank'}>
                    <i className="fab fa-facebook-square"/>
                </a>
                <a href={'#'} target={'_blank'}>
                    <i className="fas fa-phone-square-alt"/>
                </a>
                <a href={'#'} target={'_blank'}>
                    <i className="far fa-envelope"/>
                </a>
            </div>
        )
    };
}

export default ContactUsSection;
