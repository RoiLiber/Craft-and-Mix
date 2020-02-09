import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from "react-redux";
import { findIndex, split, includes } from 'lodash';
import { Slide } from "react-reveal";
import SpinLogo from "../../components/UI/SpinLogo";
import AboutUs from "../AboutUs";
import { openAboutUsSection } from '../../store/actions/mainActions';
import Pulse from "react-reveal/Pulse";
import './style.scss';

export default function TopCarousel(props) {

    const [carouselArray] = useState(props.topCarousel);
    const [carouselItem, setCarouselItem] = useState(props.topCarousel[0]);
    const [carouselNextItem, setCarouselNextItem] = useState(props.topCarousel[1]);
    const [selectedCarouselItem, setSelectedCarouselItem] = useState(0);
    const [activeCarousel, setActiveCarousel] = useState(true);

    const aboutUs = useSelector(state => state.mainReducer.aboutUs);
    const dispatch = useDispatch();

    useEffect(() => {
        const index = findIndex(props.topCarousel, { text: carouselNextItem.text });
        // debugger
        console.log('activeCarousel change');
        setTimeout(() => {
            if (activeCarousel) {
                console.log(activeCarousel);
                setStateConfig(index, false)
            }
        }, 6000)

    }, [activeCarousel]);

    const setStateConfig = (index, forceState) => {
        const { topCarousel } = props;
        const carouselItem = topCarousel[index];
        const carouselNextItem = index === topCarousel.length - 1
            ? topCarousel[0] : topCarousel[index + 1];

        setActiveCarousel(false);
        setCarouselItem(carouselItem);
        setCarouselNextItem(carouselNextItem);
        setSelectedCarouselItem(index);
        setActiveCarousel(!forceState);
    };

    const forceCarouselItem = index => {
        setStateConfig(index, true);
        setTimeout(() => {
            setActiveCarousel(true);
        }, 6000)
    };

    const textBreak = text => {
        const textArray = split(text, '|');

        return textArray.map((item, index) => {
            const goldTextForAsaf = includes(item, 'Asaf Amir');
            const goldTextForCraft = includes(item, 'CRAFT & MIX');
            const goldLogo = includes(item, 'svg');
            const newText = goldTextForAsaf ? split(item, '-')
                : goldTextForCraft ? split(item, '-') : '';

            if (goldTextForAsaf) {
                return <p key={index}>{newText[0]}<span>{newText[1]}</span></p>
            } else if (goldTextForCraft) {
                return <p key={index}><span>{newText[0]}</span>{newText[1]}</p>
            } else if (goldLogo) {
                return <SpinLogo key={index}/>
            } else {
                return <p key={index}>{item}</p>
            }
        })
    };

    const carousel = isEven => {
        const { img, text, backgroundColor } = carouselItem;
        const nextImg = carouselNextItem.img;
        const nextText = carouselNextItem.text;
        const nextBackgroundColor = carouselNextItem.backgroundColor;
        const selected = isEven
            ? selectedCarouselItem === 0 || selectedCarouselItem === 2
            : selectedCarouselItem === 1 || selectedCarouselItem === 3;

        return <div className={`carousel_wrapper`} onClick={() => forceCarouselItem(selectedCarouselItem)}>
            <div className={`carousel_background ${backgroundColor}`}>
                {selected
                    ?   <img src={img} alt={'photo'}/>
                    :   <div>{textBreak(text)}</div>}
            </div>
            {activeCarousel && <Slide
                left={!isEven}
                right={isEven}
                delay={5000}
            >
                <div className={`carousel_background ${nextBackgroundColor}`}>
                    {activeCarousel && !selected
                        ?   <img src={nextImg} alt={'photo'} className={'carousel_img'}/>
                        :   <div className={`carousel_img ${nextBackgroundColor}`}>{textBreak(nextText)}</div>}
                </div>

            </Slide>}
        </div>
    };

    const carouselDots = () => {

        return <div className={'dots'}>
            {carouselArray.map((item, index) => {
                const selected = selectedCarouselItem === index;

                return selected
                    ? <div key={index}
                           className="pulse-loader"
                           onClick={() => forceCarouselItem(index)}
                    />
                    : <i key={index}
                         className={'far fa-dot-circle'}
                         onClick={() => forceCarouselItem(index)}
                    />;

            })}
        </div>
    };

    return <div className={'carousel_section'}>
        {carousel(false)}
        {carousel(true)}
        {carouselDots()}
        <span className={aboutUs ? 'about_clicked' : ''} onClick={() => dispatch(openAboutUsSection(true))}>read more</span>
        {aboutUs && <Slide left duration={1100}>
            <div className={'about_in'}>
                        <span className={'go_back'} onClick={() => dispatch(openAboutUsSection(false))}>
                            <Pulse forever>
                                <i className="fas fa-angle-left"/>
                            </Pulse>
                        </span>
                <AboutUs/>
            </div>
        </Slide>}
    </div>
}
