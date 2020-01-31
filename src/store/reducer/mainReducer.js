import * as actionTypes from '../actions/actionTypes';
import * as configs from '../configs/Configs';

//const small = 767;
const medium = 992;
const large = 1200;
const larger = 1500;
const width = window.innerWidth;
const height = window.innerHeight;
const scrollY = window.scrollY;

const initialState = {
    windowWidthSize: {
        small: width < medium,
        medium: width > medium,
        large: width > large,
        larger: width > larger,
    },
    windowWidth: width,
    windowHeight: height,
    windowScrollY: scrollY,
    openMenu: false,
    menuList: configs.menuList,
    topCarousel: configs.topCarousel,
    mood: configs.mood,
    centerPhotoItem: false,
    clients: configs.clients
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU: {
            const openMenu = action.payload;

            return {
                ...state,
                openMenu,
                centerPhotoItem: false
            };
        }
        case actionTypes.REPORT_SCROLL_TOP_Y: {
            const windowScrollY = action.payload;

            return {
                ...state,
                windowScrollY
            };
        }
        case actionTypes.REPORT_WINDOW_WIDTH: {
            const windowWidth = action.payload;
            const windowWidthSize = {
                small: windowWidth < medium,
                medium: windowWidth > medium,
                large: windowWidth > large,
                larger: windowWidth > larger,
            };

            return {
                ...state,
                windowWidth,
                windowWidthSize
            };
        }
        case actionTypes.REPORT_WINDOW_HEIGHT: {
            const windowHeight = action.payload;

            return {
                ...state,
                windowHeight
            };
        }
        case actionTypes.SET_PHOTO_AT_CENTER: {
            const centerPhotoItem = action.payload;

            return {
                ...state,
                centerPhotoItem
            };
        }
        default:
            return state;
    }
};

export default authReducer;
