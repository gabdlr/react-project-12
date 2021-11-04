/* eslint-disable import/no-anonymous-default-export */
import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types/';

const setNewAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
});

const removeAlert = () => ({
    type: HIDE_ALERT
});
//Shows an alert
export function showAlert (alert) {
    return (dispatch) => {
        dispatch( setNewAlert(alert))
    }
}

//Hides an alert
export function hideAlert() {
    return (dispatch) => {
        dispatch(removeAlert())
    }
}
