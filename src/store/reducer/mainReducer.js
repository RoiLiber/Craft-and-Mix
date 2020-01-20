import * as actionTypes from '../actions/actionTypes';
import imgAbout from "../../assest/img/carousel/About us.jpeg";
import imgServices from "../../assest/img/carousel/Our Services.jpeg";
import imgMode from "../../assest/img/carousel/Mode.jpeg";
import imgMenu from "../../assest/img/carousel/On the Menu.jpeg";

const menuList = [
    'About us',
    'Our Services',
    'Mode',
    'On the Menu',
    'Some happy Customers',
    'Connect us',
];

const carousel = [
    { text: 'About us', img: imgAbout, color: 'black', index: 0 },
    { text: 'Our Services', img: imgServices, color: 'gold', index: 1 },
    { text: 'Mode', img: imgMode, color: 'black', index: 2 },
    { text: 'On the Menu', img: imgMenu, color: 'gold', index: 3 }
];

const initialState = {
    menuList,
    openMenu: false,
    carousel
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
