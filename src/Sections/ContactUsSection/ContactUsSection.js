import React, { Component, Fragment } from 'react';
import './style.scss';
import SectionHeadLine from "../../components/SectionHeadLine";

class ContactUsSection extends Component {

    render() {
        return (
            <div className={'contact_us_section'}>
                <Fragment>
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
                </Fragment>
                <SectionHeadLine
                    //scrollTo={this.scrollTo}
                    scroll={1000}
                    text={'Mood'}
                    textColor={'black'}
                    arrowColor={'gold'}
                    lineColor={'gold'}
                    arrowUp={true}
                />
            </div>
        )
    };
}

export default ContactUsSection;
