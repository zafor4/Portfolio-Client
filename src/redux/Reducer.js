import * as actionTypes from './ActionTypes';

const INITIAL_STATE = {
    projects: [],
    articles: [],
    article:{},
    project:{},
    messages:[],
    token: null,
    user:{},
    loading: false,
    authFailedMsg: null,
    mode: 'light'
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_MODE:
            const newMode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('mode', newMode);
            return {
                ...state,
                mode: newMode
            }
            case actionTypes.MODE_CHECK:
                return{
                    ...state,
                    mode:action.payload
                }
                case actionTypes.AUTH_SUCCESS:
                    return {
                        ...state,
                        token:action.payload.token,
                        user:action.payload.user
                    }
                    case actionTypes.AUTH_LOGOUT:
                        localStorage.removeItem('token')
                        return{
                            ...state,
                            token:null,
                            user:null
                        }
                        case actionTypes.ADD_PROJECTS:
                            return{
                                ...state,
                                projects:action.payload
                            }

                            case actionTypes.ADD_Articles:
                                return{
                                    ...state,
                                    articles:action.payload
                                }
                                case actionTypes.ADD_INDIVIDUAL_Article:
                                    return{
                                        ...state,
                                        article:action.payload
                                    }
                                    case actionTypes.ADD_INDIVIDUAL_PROJECT:
                                        return{
                                            ...state,
                                            project:action.payload
                                        }
                                        case actionTypes.ADD_MESSAGE:
                                            return{
                                                ...state,
                                                messages:action.payload

                                            }
        default:
            return state;
    }
}
