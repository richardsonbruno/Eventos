const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLogado: 0
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOG_IN':
            return { ...state, usuarioEmail: action.usuarioEmail, usuarioLogado: 1 };
        case 'LOG_OUT':
            return { ...state, usuarioEmail: null, usuarioLogado: 0 };
        default:
            return state;
    }
}