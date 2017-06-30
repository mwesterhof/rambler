import React, { Component } from 'react'

import {api_post} from '../lib/fetch'


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            username: e.target.username,
            password: e.target.password
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        return api_post(
            'get_token',
            {
                username: e.target.username.value,
                password: e.target.password.value
            },
            data => {
                if (data.token) {
                    this.props.setToken(data.token)
                }
            }
        )
    }

    render() {
        return (
            <div className="LoginForm">
                <h2>LoginForm</h2>
                <form onSubmit={this.handleSubmit}>
                    username: <input onChange={this.handleChange} name='username' /><br />
                    password: <input onChange={this.handleChange} type='password' name='password' /><br />
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default LoginForm
