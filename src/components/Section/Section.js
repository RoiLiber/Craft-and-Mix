import React, {Component} from 'react';
import './style.scss';
import { Element } from 'react-scroll';
import SectionHeadLine from '../SectionHeadLine';

class Section extends Component {

    render() {
        const { elementName, text, textColor, color, children, position } = this.props;

        return (
            <Element name={elementName} className={'element'}>
                <div className={`section_Wrapper ${position}`}>
                    <SectionHeadLine
                        text={text}
                        textColor={textColor}
                        color={color}
                        elementName={elementName}
                    />
                    {children}
                </div>
            </Element>
        )
    };
}

export default Section;



