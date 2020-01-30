import * as actionTypes from "./actionTypes";

export const toggleMenu = bool => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.TOGGLE_MENU,
            payload: bool
        })
    }
};

export const reportWindowScrollTopY = windowScroll => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.REPORT_SCROLL_TOP_Y,
            payload: windowScroll
        })
    }
};

export const setWindowWidth = windowWidth => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.REPORT_WINDOW_WIDTH,
            payload: windowWidth
        })
    }
};

export const setWindowHeight = windowHeight => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.REPORT_WINDOW_HEIGHT,
            payload: windowHeight
        })
    }
};

export const setPhoto = photo => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_PHOTO_AT_CENTER,
            payload: photo
        })
    }
};


