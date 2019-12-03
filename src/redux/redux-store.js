import {createStore, combineReducers, applyMiddleware}  from 'redux'
import ProfileReducer from './ProfileReducer'
import MessageReducer from './MessageReducer'
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import AppReducer from './AppReducer'


let reducers=combineReducers({
    ProfilePage:ProfileReducer,
    MessagePage:MessageReducer,
    UsersPage:UsersReducer,
    Auth:AuthReducer,
    form:formReducer,
    app:AppReducer
})
let store=createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;