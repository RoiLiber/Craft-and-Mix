import React, {Component} from 'react';
import { Element } from 'react-scroll';
import SectionHeadLine from '../SectionHeadLine';
import './style.scss';

class Section extends Component {

    render() {
        const { elementName, text, textColor, color, children, position, noHeadLine } = this.props;

        return (
            <Element name={elementName} className={'element'}>
                <div className={`section_Wrapper ${position}`}>
                    {!noHeadLine && <SectionHeadLine
                        text={text}
                        textColor={textColor}
                        color={color}
                        elementName={elementName}
                        addHeart
                    />
                    }

                    {children}
                </div>
            </Element>
        )
    };
}

export default Section;



