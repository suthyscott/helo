import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleRegisterUser = () => {
        const {username, password} = this.state
        axios.post('/auth/register', {username, password})
        .then(res => {
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    handleGetUser = () => {
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
        .then(res => {
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }
    
    render(){
        return (
            <div>
                Auth
                <input 
                placeholder='Username'
                name='username' />
                <input 
                placeholder='Password'
                name='password' />

                <Link to='/dashboard'><button>Login</button></Link>
                <button onClick={() => this.handleRegisterUser()}>Register</button>
            </div>
        )
    }
}

export default Auth