import * as types from '../actions/types';

const modalReducer = (state = {isModalOpen: false, username: '', password: ''}, action) => {
    switch (action.type) {
        case types.TOGGLE_LOGIN_MODAL:
            const ns = Object.assign({}, state);
            ns.isModalOpen = !ns.isModalOpen;
            return ns;
        case types.LOGIN:
            const login = Object.assign({}, state);
            login.username = action.username;
            login.password = action.password;
            return login;
        case types.REGISTER:
            const register = Object.assign({}, state);
            register.username = action.username;
            register.password = action.password;
            return register;
        default:
            return state;
    }
};

export default modalReducer;
