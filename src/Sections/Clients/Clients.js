import React, { Component } from 'react';
import Section from "../../components/Section";
import { Fade } from "react-reveal";
import './style.scss';

class Clients extends Component {

    logo = client => {
        return <span>
            <img className={client.name} src={client.logo} alt={client.name}/>
        </span>
    };

    render() {
        const { clients } = this.props;

        return (
            <Section elementName={'clients'} text={'Some of Our Happy Clients'} textColor={'black'} color={'gold'}>
                <div className={'clients'}>
                    <div className={'icon_wrapper'}>
                        {clients.map((client, index) => {
                            return <Fade bottom delay={client.delay} key={index}>
                                {this.logo(client)}
                            </Fade>
                        })}
                    </div>
                </div>
            </Section>
        )
    };
}

export default Clients;




