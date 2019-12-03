import { AuthMeCreator } from '../redux/AuthReducer'

let initialState = {
    initialized: false,

}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZED': {
            return { ...state, initialized: true }

        }
        default:
            return state
    }
}

export const AppInitialized = () => { return ({ type: 'SET_INITIALIZED' }); }

export const InitialApp = () => {
    return (dispatch) => {
        let promise = dispatch(AuthMeCreator())
        promise.then(() => { dispatch(AppInitialized()) })
    }
}

export default AppReducer

    