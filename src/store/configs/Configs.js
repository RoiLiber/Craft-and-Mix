import imgAbout from "../../assest/img/carousel/About us.jpeg";
import imgServices from "../../assest/img/carousel/Our Services.jpeg";
import imgMode from "../../assest/img/carousel/Mode.jpeg";
import imgMenu from "../../assest/img/carousel/On the Menu.jpeg";
import imgMood7 from "../../assest/img/on-the-roof-tlv/team_craft.jpeg";
import imgMood4 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.03.jpeg";
import imgMood1 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.02(1).jpeg";
import imgMood3 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.03(1).jpeg";
import imgMood2 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.02.jpeg";
import imgMood5 from "../../assest/img/mood/w.jpeg";
import imgMood6 from "../../assest/img/carousel/On the Menu.jpeg";
import logo from '../../assest/icon/Crift & Mix_logo icon.svg';

export const menuList = [
    { text: 'Our Services', elementName: 'OurServices' },
    { text: 'Mood', elementName: 'mood' },
    // { text: 'On the Menu', elementName: 'onTheMenu' },
    { text: 'Happy Clients', elementName: 'clients' },
    { text: 'Contact us', elementName: 'contactUs' },
];

export const topCarousel = [
    { text: 'Created by- Asaf Amir,|' +
            'CRAFT & MIX- is set to give you|' +
            'the best cocktail and bar|' +
            'experience you can get!', img: imgAbout, backgroundColor: 'gold' },
    { text: 'Our top priority is|' +
            'professional and kind service|' +
            'next to deep|' +
            'mixology creativity|' +
            'and fancy cocktails.', img: imgServices, backgroundColor: 'black' },
    { text: 'We give services to|' +
            'private clients,|' +
            'business companies,|' +
            'bars and restaurants.', img: imgMode, backgroundColor: 'gold' },
    { text: logo, img: imgMenu, backgroundColor: 'black' }
];

export const mood = [
    { text: 'Our team', event: 'google fun', img: imgMood7 },
    { text: 'She know some shit', event: 'google fun', img: imgMood4 },
    { text: 'Craft it', event: 'google fun', img: imgMood6 },
    { text: 'Lime???', event: 'google fun', img: imgMood1 },
    { text: 'Our Services Google event', event: 'google fun', img: imgMood3 },
    { text: 'Our Services', event: 'google fun', img: imgMood2 },
    { text: 'Mode', event: 'google fun', img: imgMood5 }
];
