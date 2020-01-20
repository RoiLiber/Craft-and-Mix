import * as actionTypes from "./actionTypes";

export const toggleMenu = bool => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.TOGGLE_MENU,
            payload: bool
        })
    }
};
