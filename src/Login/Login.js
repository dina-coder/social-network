import React from 'react'
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'
import {connect} from 'react-redux'
import {login} from '../redux/AuthReducer'

import {Redirect} from 'react-router-dom'





const Login = (props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth===true)  return <Redirect to={'/profile'}/>
    return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  
}



const LoginForm=(props)=>{
return <form onSubmit={props.handleSubmit}>
    <div> <Field placeholder={'Login'} name={"email"}  component={"input"} /> </div>
    <div> <Field placeholder={'Password'} name={"password"}  component={"input"}/> </div>
    <div> <Field type={'checkbox'} name={"rememberMe"} component={"input"} />Запомнить меня </div>
    <div><button>Submit</button></div>
</form>
}

const mapStateToProps=(state)=>({
    isAuth:state.Auth.isAuth
})
const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm)
export default connect(mapStateToProps,{login}) (Login)