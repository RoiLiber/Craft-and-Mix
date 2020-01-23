import * as actionTypes from '../actions/actionTypes';
import imgAbout from "../../assest/img/carousel/About us.jpeg";
import imgServices from "../../assest/img/carousel/Our Services.jpeg";
import imgMode from "../../assest/img/carousel/Mode.jpeg";
import imgMenu from "../../assest/img/carousel/On the Menu.jpeg";
import imgMood1 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.02(1).jpeg";
import imgMood2 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.02.jpeg";
import imgMood3 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.03(1).jpeg";
import imgMood4 from "../../assest/img/mood/WhatsApp Image 2020-01-17 at 21.54.03.jpeg";
import imgMood5 from "../../assest/img/mood/w.jpeg";
import imgMood6 from "../../assest/img/carousel/On the Menu.jpeg";
import imgMood7 from "../../assest/img/on-the-roof-tlv/team_craft.jpeg";

const windowWidthSm = 767;
const windowWidthMd = 992;
const windowWidthLr = 1200;

const menuList = [
    { text: 'About us', elementName: 'aboutUs' },
    { text: 'Our Services', elementName: 'OurServices' },
    { text: 'Mood', elementName: 'mood' },
    // { text: 'On the Menu', elementName: 'onTheMenu' },
    { text: 'Some happy Customers', elementName: 'someHappyCustomers' },
    { text: 'Contact us', elementName: 'contactUs' },
];

const carousel = [
    { text: 'About us', img: imgAbout, color: 'black', index: 0 },
    { text: 'Our Services', img: imgServices, color: 'gold', index: 1 },
    { text: 'Mode', img: imgMode, color: 'black', index: 2 },
    { text: 'On the Menu', img: imgMenu, color: 'gold', index: 3 }
];

const mood = [
    { text: 'Our team', img: imgMood7, color: 'black', index: 0 },
    { text: 'She know some shit', img: imgMood4, color: 'gold', index: 1 },
    { text: 'Craft it', img: imgMood6, color: 'black', index: 2 },
    { text: 'Lime???', img: imgMood1, color: 'gold', index: 3 },
    { text: 'Our Services Google event', img: imgMood3, color: 'gold', index: 4 },
    { text: 'Our Services', img: imgMood2, color: 'black', index: 5 },
    { text: 'Mode', img: imgMood5, color: 'gold', index: 6 }
];

const initialState = {
    windowWidthSm,
    windowWidthMd,
    windowWidthLr,
    menuList,
    openMenu: false,
    carousel,
    mood
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU: {
            const openMenu = action.payload;

            return {
                ...state,
                openMenu
            };
        }
        default:
            return state;
    }
};

export default authReducer;
