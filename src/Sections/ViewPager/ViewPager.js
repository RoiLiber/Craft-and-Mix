import React, { useRef } from 'react';
import { clamp } from 'lodash';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './style.scss';

import imgMood7 from "../../assest/img/on-the-roof-tlv/team_craft.jpeg";
import imgMood4 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.03.jpeg";
import imgMood1 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.02(1).jpeg";
import imgMood3 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.03(1).jpeg";
import imgMood2 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.02.jpeg";

const pages = [
    imgMood7,
    imgMood4,
    imgMood1,
    imgMood3,
    imgMood2,
];

export default function ViewPager() {
    const index = useRef(0);
    const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }));
    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2)
            cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)));
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' };
            const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
            const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
            return { x, sc, display: 'block' }
        })
    });
    return props.map(({ x, display, sc }, i) => (
        <animated.div className={'view_pager'} {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
            <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
        </animated.div>
    ))
}





