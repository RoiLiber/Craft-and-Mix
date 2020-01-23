import React from 'react';
import './style.scss';
import { Link, Element } from 'react-scroll';
import SectionHeadLine from '../SectionHeadLine';

export default function Section(props) {
    const { elementName, text, textColor, color, children, position } = props;
    let width = window.innerWidth;
    const mobile = width < 767;

    return (
        <Element name={elementName} className={'element'}>
            <div className={`section_Wrapper ${position}`}>
                <Link
                    className={'element_link'}
                    activeClass="active"
                    to={elementName}
                    spy={true}
                    smooth={true}
                    offset={mobile ? -30 : -90}
                    duration={900}
                    onSetActive={() => {}}
                >
                    <SectionHeadLine text={text} textColor={textColor} color={color}/>
                </Link>
                {children}
            </div>
        </Element>
    );
}



