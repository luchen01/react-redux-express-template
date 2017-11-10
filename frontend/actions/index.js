// Action Creators

import * as types from './types';

export function toggleLoginModal() {
    return {
        type: types.TOGGLE_LOGIN_MODAL,
    };
}
export function handleRegister(username, password) {
    return {
        type: types.REGISTER,
        username,
        password
    };
}

export function handleLogin(username, password) {
    return {
        type: types.LOGIN,
        username,
        password
    };
}
